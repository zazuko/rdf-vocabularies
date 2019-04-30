const fs = require('fs')
const { join, resolve } = require('path')
const rdf = require('rdf-ext')
const rdfVocabularies = require('.')

describe('default export', () => {
  it('loads all prefixes', async () => {
    const prefixes = rdfVocabularies.prefixes
    const overrides = require('./overrides')
    for (const prefix in prefixes) {
      const uri = prefixes[prefix]
      const override = overrides[prefix]
      prefixes[prefix] = Object.assign({ uri, prefix }, override)
    }
    const prefixesCount = Object.values(prefixes).filter(prefix => !prefix.skip).length
    expect(Object.keys(await rdfVocabularies())).toHaveLength(prefixesCount)
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

function loadFile (prefix) {
  return fs.readFileSync(buildPath(prefix), { encoding: 'utf8' })
}

function buildPath (prefix) {
  return resolve(join('.', 'ontologies', `${prefix}.nq`))
}
