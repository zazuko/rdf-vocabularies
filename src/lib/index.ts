import ParserN3 from '@rdfjs/parser-n3'
import rdf from 'rdf-ext'
import { loadDatasetStream } from './loadDataset'

import prefixes from './prefixes'
// memoizing the prefixes already used in 'expand'
const loadedPrefixes = {}

interface Datasets { [prefix: string]: any }

export { default as prefixes } from './prefixes'

export async function vocabularies ({ only = null, factory = rdf, stream = false } = {}): Promise<Datasets> {
  const customSelection = !!only && Array.isArray(only)

  let selectedPrefixes = []
  if (customSelection) {
    only.forEach((prefix: string) => {
      if (prefix in prefixes) {
        selectedPrefixes.push(prefix)
      }
      else {
        console.warn(`unknown prefix '${prefix}'`)
      }
    })
  }
  if (!selectedPrefixes.length) {
    selectedPrefixes = Object.keys(prefixes)
  }

  const promises = selectedPrefixes.map((prefix) => loadFile(prefix, { customSelection: !!only, factory }))
  const datasets = await Promise.all(promises)

  if (stream !== false) {
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

export function loadFile (prefix: string, { customSelection, factory }) {
  const parserN3 = new ParserN3()
  const readStream = loadDatasetStream(prefix)
  const quadStream = parserN3.import(readStream)
  return factory.dataset().import(quadStream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })
}

export function expand (prefixed: string, types = []) {
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

export function shrink (iri: string) {
  const found = Array.from(Object.entries(prefixes)).find(([, baseIRI]) => iri.startsWith(baseIRI))
  if (found) {
    return iri.replace(new RegExp(`^${found[1]}`), `${found[0]}:`)
  }
  return ''
}

export async function expandWithCheck ({ prefix, iri, baseIRI, types }) {
  if (!(prefix in loadedPrefixes)) {
    // if not previously loaded, load and memoize for later use
    const datasets = await vocabularies({ only: [prefix], factory: rdf })
    loadedPrefixes[prefix] = datasets[prefix]
  }
  const dataset = loadedPrefixes[prefix]

  const typesNamedNodes = types.map((type: any) => typeof type === 'string' ? rdf.namedNode(type) : type)
  const typeTerm = rdf.namedNode(expand('rdf:type'))
  const graph = rdf.namedNode(baseIRI)
  for (const typeNamedNode of typesNamedNodes) {
    const found = dataset.match(rdf.namedNode(iri), typeTerm, typeNamedNode, graph)
    if (found.size) {
      return found.toArray()[0].subject.value
    }
  }
  return ''
}
