import * as ParserN3 from '@rdfjs/parser-n3'
import * as rdf from 'rdf-ext'

import prefixes from './prefixes'
// memoizing the prefixes already used in 'expand'
const loadedPrefixes = {}

let loadDatasetStreamPromise
if (require) {
  loadDatasetStreamPromise = Promise.resolve().then(() => require('./loadDataset.node').loadDatasetStream)
}
else {
  loadDatasetStreamPromise = import('./loadDataset.web').then(ld => ld.loadDatasetStream)
}

interface Datasets { [prefix: string]: any }

export async function rdfVocabularies ({ only = null, factory = rdf, stream = false } = {}): Promise<Datasets> {
  const customSelection = !!only && Array.isArray(only)

  let selectedPrefixes
  if (customSelection) {
    selectedPrefixes = []
    only.forEach(prefix => {
      if (prefix in prefixes) {
        selectedPrefixes.push(prefix)
      }
      else {
        console.warn(`unknown prefix '${prefix}'`)
      }
    })
  }
  if (!selectedPrefixes) {
    selectedPrefixes = Object.keys(prefixes)
  }

  const promises = selectedPrefixes.map((prefix) => loadFile(prefix, { customSelection: !!only, factory }))
  const datasets = await Promise.all(promises)

  if (stream) {
    let combinedDataset = factory.dataset()
    datasets.forEach((dataset: any) => {
      if (dataset && dataset.size) {
        combinedDataset = combinedDataset.merge(dataset)
      }
    })
    return combinedDataset.toStream()
  }

  const result = {}
  datasets.forEach((dataset: any, i) => {
    if (dataset && dataset.size) {
      result[selectedPrefixes[i]] = dataset
    }
  })
  return result
}

async function loadFile (prefix, { customSelection, factory }) {
  const parserN3 = new ParserN3()
  const loadDatasetStream = await loadDatasetStreamPromise
  const readStream = await loadDatasetStream(prefix)
  const quadStream = parserN3.import(readStream)
  return factory.dataset().import(quadStream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })
}

export function expand (prefixed, types = []) {
  const [prefix, term] = prefixed.split(':')
  if (!prefix || !term) {
    return ''
  }

  const baseIRI = prefixes[prefix]
  if (!baseIRI) {
    throw new Error(`Unavailable prefix '${prefix}:'`)
  }

  const iri = `${baseIRI}${term}`
  if (!types.length) {
    return iri
  }

  return expandWithCheck({ prefix, iri, baseIRI, types })
}

export function shrink (iri) {
  const found = Array.from(Object.entries(prefixes)).find(([, baseIRI]) => iri.startsWith(baseIRI))
  if (found) {
    return iri.replace(new RegExp(`^${found[1]}`), `${found[0]}:`)
  }
  return ''
}

export async function expandWithCheck ({ prefix, iri, baseIRI, types }) {
  if (!(prefix in loadedPrefixes)) {
    // if not previously loaded, load and memoize for later use
    const datasets = await rdfVocabularies({ only: [prefix], factory: rdf })
    loadedPrefixes[prefix] = datasets[prefix]
  }
  const dataset = loadedPrefixes[prefix]

  const typesNamedNodes = types.map((type) => typeof type === 'string' ? rdf.namedNode(type) : type)
  const typeTerm = rdf.namedNode(expand('rdf:type'))
  const graph = rdf.namedNode(baseIRI)
  for (const typeNamedNode of typesNamedNodes) {
    const found = dataset.match(rdf.namedNode(iri), typeTerm, typeNamedNode, graph)
    if (found.size) {
      return [...found][0].subject.value
    }
  }
  return ''
}
