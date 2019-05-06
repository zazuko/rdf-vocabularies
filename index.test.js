const fs = require('fs')
const { join, resolve } = require('path')
const rdf = require('rdf-ext')
const rdfVocabularies = require('.')

describe('default export', () => {
  it('loads all prefixes', async () => {
    expect(Object.keys(await rdfVocabularies())).toHaveLength(43)
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
    expect(rdfVocabularies.expand('rdfs:Class')).toBe('http://www.w3.org/2000/01/rdf-schema#Class')
    expect(rdfVocabularies.expand('rdf:Property')).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')
    expect(rdfVocabularies.expand('schema:Person')).toBe('http://schema.org/Person')
    expect(rdfVocabularies.expand('xsd:dateTime')).toBe('http://www.w3.org/2001/XMLSchema#dateTime')
  })

  it('throws with unknown prefixes', () => {
    expect(() => rdfVocabularies.expand('foo:Class')).toThrow()
  })

  it('expands only if exists with a given type', async () => {
    const Class = rdfVocabularies.expand('rdfs:Class')
    const Property = rdfVocabularies.expand('rdf:Property')
    const Boolean = rdfVocabularies.expand('xsd:boolean')

    expect(await rdfVocabularies.expand('schema:Person', [Boolean])).toBe('')
    expect(await rdfVocabularies.expand('schema:DoesntExist', [Class, Property])).toBe('')
    expect(await rdfVocabularies.expand('schema:Person', [Class, Property])).toBe('http://schema.org/Person')
  })
})

function loadFile (prefix) {
  return fs.readFileSync(buildPath(prefix), { encoding: 'utf8' })
}

function buildPath (prefix) {
  return resolve(join('.', 'ontologies', `${prefix}.nq`))
}
