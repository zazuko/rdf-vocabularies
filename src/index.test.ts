import { describe, it, before, after } from 'mocha'
import { expect } from 'chai'
import fs from 'fs'
import { join, resolve as resolvePath } from 'path'
import rdf from 'rdf-ext'
import { vocabularies } from './vocabularies'
import { shrink } from './shrink'
import { expand } from './'
import prefixes from './prefixes'

const list = (directoryPath: string): Promise<string[]> =>
  new Promise((resolve, reject) => fs.readdir(directoryPath, (err, files: string[]) => {
    if (err) {
      reject(err)
      return
    }
    resolve(files.filter((filename) => !filename.startsWith('_')))
  }))

describe('default export', function () {
  this.timeout(10000)

  it('loads all prefixes', async () => {
    const vocabsDir = resolvePath('./ontologies')
    const ontologies = await list(vocabsDir)
    expect(Object.keys(await vocabularies())).to.have.length(ontologies.length)
  })

  it('has the right quads count', async () => {
    const result = await vocabularies()

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).to.eq(loadFile(prefix).split('\n').filter(Boolean).length)
    })
  })

  it('returns a selection of prefixes', async () => {
    const result = await vocabularies({ only: ['skos', 'dcterms'] })

    expect(Object.keys(result)).to.have.length(2)

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).to.eq(loadFile(prefix).split('\n').filter(Boolean).length)
    })
  })

  it('returns a stream of a selection of prefixes', async () => {
    const result = await vocabularies({ only: ['skos', 'dcterms'] })
    let mergedDataset = rdf.dataset()
    Object.values(result).forEach((dataset) => {
      mergedDataset = mergedDataset.merge(dataset)
    })
    const stream = await vocabularies({ only: ['skos', 'dcterms'], stream: true })
    let i = 0
    stream.on('data', (quad) => {
      if (![quad.subject.termType, quad.predicate.termType, quad.object.termType].includes('BlankNode')) {
        expect(mergedDataset.has(quad)).to.eq(true)
      }
      i++
    })
    stream.on('end', () => {
      expect(mergedDataset.size).to.eq(i)
    })
  })
})

describe('expand', () => {
  it('expands prefixed to full IRI', () => {
    expect(expand('rdfs:Class')).to.eq('http://www.w3.org/2000/01/rdf-schema#Class')
    expect(expand('rdf:Property')).to.eq('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')
    expect(expand('schema:Person')).to.eq('http://schema.org/Person')
    expect(expand('xsd:dateTime')).to.eq('http://www.w3.org/2001/XMLSchema#dateTime')
  })

  it('throws with unknown prefixes', () => {
    expect(() => expand('foo:Class')).to.throw()
  })

  it('expands only if exists with a given type', async () => {
    const Class = expand('rdfs:Class')
    const Property = expand('rdf:Property')
    const Boolean = expand('xsd:boolean')

    expect(await expand('schema:Person', [Boolean])).to.eq('')
    expect(await expand('schema:DoesntExist', [Class, Property])).to.eq('')
    expect(await expand('schema:Person', [Class, Property])).to.eq('http://schema.org/Person')
    expect(await expand('schema:Person', [rdf.namedNode(Class), Property])).to.eq('http://schema.org/Person')
  })
})

describe('shrink', () => {
  it('shrinks full IRI to prefix', () => {
    expect(shrink('http://www.w3.org/2000/01/rdf-schema#Class')).to.eq('rdfs:Class')
    expect(shrink('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')).to.eq('rdf:Property')
    expect(shrink('http://schema.org/Person')).to.eq('schema:Person')

    expect(shrink('http://qudt.org/vocab/constant/AlphaParticleMass')).to.eq('constant:AlphaParticleMass')
    expect(shrink('http://qudt.org/vocab/discipline/AtomicPhysics')).to.eq('discipline:AtomicPhysics')
    expect(shrink('http://qudt.org/vocab/prefix/Deka')).to.eq('prefix:Deka')
    expect(shrink('http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T-4D0')).to.eq('qkdv:A0E0L2I0M0H0T-4D0')
    expect(shrink('http://qudt.org/vocab/quantitykind/AngularCrossSection')).to.eq('quantitykind:AngularCrossSection')
    expect(shrink('http://qudt.org/vocab/sou/SOU_PLANCK')).to.eq('sou:SOU_PLANCK')
    expect(shrink('http://qudt.org/schema/qudt/baseImperialUnitDimensions')).to.eq('qudt:baseImperialUnitDimensions')
    expect(shrink('https://www.ica.org/standards/RiC/ontology#Activity')).to.eq('rico:Activity')
    expect(shrink('http://qudt.org/vocab/unit/KiloM')).to.eq('unit:KiloM')
  })

  it('is the inverse of expand', () => {
    expect(shrink(expand('rdfs:Class'))).to.eq('rdfs:Class')
    expect(shrink(expand('rdf:Property'))).to.eq('rdf:Property')
    expect(shrink(expand('schema:Person'))).to.eq('schema:Person')
    expect(shrink(expand('xsd:dateTime'))).to.eq('xsd:dateTime')

    expect(expand(shrink('http://www.w3.org/2000/01/rdf-schema#Class'))).to.eq('http://www.w3.org/2000/01/rdf-schema#Class')
    expect(expand(shrink('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'))).to.eq('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')
    expect(expand(shrink('http://schema.org/Person'))).to.eq('http://schema.org/Person')
    expect(expand(shrink('http://www.w3.org/2001/XMLSchema#dateTime'))).to.eq('http://www.w3.org/2001/XMLSchema#dateTime')
  })

  it('returns empty string with unknown prefixes', () => {
    expect(shrink('http://example.com/foo')).to.eq('')
  })

  it('handles overlapping prefixes', () => {
    prefixes['foo'] = 'http://example.com/foo/'
    prefixes['bar'] = 'http://example.com/foo/bar/'

    expect(shrink('http://example.com/foo/test')).to.eq('foo:test')
    expect(shrink('http://example.com/foo/bar/test')).to.eq('bar:test')

    prefixes['bar2'] = 'http://example.com/foo2/bar/'
    prefixes['foo2'] = 'http://example.com/foo2/'

    expect(shrink('http://example.com/foo2/test')).to.eq('foo2:test')
    expect(shrink('http://example.com/foo2/bar/test')).to.eq('bar2:test')
  })
})

describe('user-defined prefixes', () => {
  before(() => {
    prefixes['zzz'] = 'http://foo/'
  })
  after(() => {
    delete prefixes['zzz']
  })
  it('expands', () => {
    expect(expand('zzz:bar')).to.eq('http://foo/bar')
  })
  it('shrinks', () => {
    expect(shrink('http://foo/bar')).to.eq('zzz:bar')
  })
})

function loadFile (prefix: string) {
  return fs.readFileSync(buildPath(prefix), { encoding: 'utf8' })
}

function buildPath (prefix: string) {
  return resolvePath(join('.', 'ontologies', `${prefix}.nq`))
}
