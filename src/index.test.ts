import fs from 'fs'
import { join, resolve as resolvePath } from 'path'
import rdf from 'rdf-ext'
import { expand, prefixes, shrink, vocabularies } from '.'

const list = (directoryPath: string): Promise<string[]> =>
  new Promise((resolve, reject) => fs.readdir(directoryPath, (err, files: string[]) => {
    if (err) {
      reject(err)
      return
    }
    resolve(files.filter((filename) => !filename.startsWith('_')))
  }))

describe('default export', () => {
  it('loads all prefixes', async () => {
    const vocabsDir = resolvePath('./ontologies')
    const ontologies = await list(vocabsDir)
    expect(Object.keys(await vocabularies())).toHaveLength(ontologies.length)
  })

  it('has the right quads count', async () => {
    const result = await vocabularies()

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).toBe(loadFile(prefix).split('\n').filter(Boolean).length)
    })
  })

  it('returns a selection of prefixes', async () => {
    const result = await vocabularies({ only: ['skos', 'dcterms'] })

    expect(Object.keys(result)).toHaveLength(2)

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).toBe(loadFile(prefix).split('\n').filter(Boolean).length)
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
        expect(mergedDataset.has(quad)).toBe(true)
      }
      i++
    })
    stream.on('end', () => {
      expect(mergedDataset.size).toBe(i)
    })
  })
})

describe('expand', () => {
  it('expands prefixed to full IRI', () => {
    expect(expand('rdfs:Class')).toBe('http://www.w3.org/2000/01/rdf-schema#Class')
    expect(expand('rdf:Property')).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')
    expect(expand('schema:Person')).toBe('http://schema.org/Person')
    expect(expand('xsd:dateTime')).toBe('http://www.w3.org/2001/XMLSchema#dateTime')
  })

  it('throws with unknown prefixes', () => {
    expect(() => expand('foo:Class')).toThrow()
  })

  it('expands only if exists with a given type', async () => {
    const Class = expand('rdfs:Class')
    const Property = expand('rdf:Property')
    const Boolean = expand('xsd:boolean')

    expect(await expand('schema:Person', [Boolean])).toBe('')
    expect(await expand('schema:DoesntExist', [Class, Property])).toBe('')
    expect(await expand('schema:Person', [Class, Property])).toBe('http://schema.org/Person')
    expect(await expand('schema:Person', [rdf.namedNode(Class), Property])).toBe('http://schema.org/Person')
  })
})

describe('shrink', () => {
  it('shrinks full IRI to prefix', () => {
    expect(shrink('http://www.w3.org/2000/01/rdf-schema#Class')).toBe('rdfs:Class')
    expect(shrink('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')).toBe('rdf:Property')
    expect(shrink('http://schema.org/Person')).toBe('schema:Person')
    expect(shrink('http://www.w3.org/2001/XMLSchema#dateTime')).toBe('xsd:dateTime')
  })

  it('is the inverse of expand', () => {
    expect(shrink(expand('rdfs:Class'))).toBe('rdfs:Class')
    expect(shrink(expand('rdf:Property'))).toBe('rdf:Property')
    expect(shrink(expand('schema:Person'))).toBe('schema:Person')
    expect(shrink(expand('xsd:dateTime'))).toBe('xsd:dateTime')

    expect(expand(shrink('http://www.w3.org/2000/01/rdf-schema#Class'))).toBe('http://www.w3.org/2000/01/rdf-schema#Class')
    expect(expand(shrink('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'))).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')
    expect(expand(shrink('http://schema.org/Person'))).toBe('http://schema.org/Person')
    expect(expand(shrink('http://www.w3.org/2001/XMLSchema#dateTime'))).toBe('http://www.w3.org/2001/XMLSchema#dateTime')
  })

  it('returns empty string with unknown prefixes', () => {
    expect(shrink('http://example.com/foo')).toBe('')
  })

  it('handles overlapping prefixes', () => {
    prefixes['foo'] = 'http://example.com/foo/'
    prefixes['bar'] = 'http://example.com/foo/bar/'

    expect(shrink('http://example.com/foo/test')).toBe('foo:test')
    expect(shrink('http://example.com/foo/bar/test')).toBe('bar:test')

    prefixes['bar2'] = 'http://example.com/foo2/bar/'
    prefixes['foo2'] = 'http://example.com/foo2/'

    expect(shrink('http://example.com/foo2/test')).toBe('foo2:test')
    expect(shrink('http://example.com/foo2/bar/test')).toBe('bar2:test')
  })
})

describe('user-defined prefixes', () => {
  beforeAll(() => {
    prefixes['zzz'] = 'http://foo/'
  })
  afterAll(() => {
    delete prefixes['zzz']
  })
  it('expands', () => {
    expect(expand('zzz:bar')).toBe('http://foo/bar')
  })
  it('shrinks', () => {
    expect(shrink('http://foo/bar')).toBe('zzz:bar')
  })
})

function loadFile (prefix: string) {
  return fs.readFileSync(buildPath(prefix), { encoding: 'utf8' })
}

function buildPath (prefix: string) {
  return resolvePath(join('.', 'ontologies', `${prefix}.nq`))
}
