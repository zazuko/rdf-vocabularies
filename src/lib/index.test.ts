import * as fs from 'fs'
import { join, resolve } from 'path'
import * as rdf from 'rdf-ext'
import { rdfVocabularies, expand, shrink } from '.'

describe('default export', () => {
  it('loads all prefixes', async () => {
    expect(Object.keys(await rdfVocabularies())).toHaveLength(44)
  })

  it('has the right quads count', async () => {
    const result = await rdfVocabularies()

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).toBe(loadFile(prefix).split('\n').filter(Boolean).length)
    })
  })

  it('returns a selection of prefixes', async () => {
    const result = await rdfVocabularies({ only: ['skos', 'dcterms'] })

    expect(Object.keys(result)).toHaveLength(2)

    Object.entries(result).forEach(([prefix, dataset]) => {
      expect(dataset.size).toBe(loadFile(prefix).split('\n').filter(Boolean).length)
    })
  })

  it('returns a stream of a selection of prefixes', async () => {
    const result = await rdfVocabularies({ only: ['skos', 'dcterms'] })
    let mergedDataset = rdf.dataset()
    Object.values(result).forEach((dataset) => {
      mergedDataset = mergedDataset.merge(dataset)
    })
    const stream = await rdfVocabularies({ only: ['skos', 'dcterms'], stream: true })
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
})

function loadFile (prefix) {
  return fs.readFileSync(buildPath(prefix), { encoding: 'utf8' })
}

function buildPath (prefix) {
  return resolve(join('.', 'ontologies', `${prefix}.nq`))
}
