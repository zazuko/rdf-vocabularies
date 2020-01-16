import ParserN3 from '@rdfjs/parser-n3'
import rdf from 'rdf-ext'
import DatasetExt from 'rdf-ext/lib/Dataset'
import { NamedNode, Stream } from 'rdf-js'
import { loadDatasetStream } from './loadDataset'

import prefixes from './prefixes'
// memoizing the prefixes already used in 'expand'
const loadedPrefixes: Datasets = {}

type Datasets = Record<string, DatasetExt>

export { default as prefixes } from './prefixes'

interface VocabulariesOptions {
  only?: string[] | null;
  factory?: typeof rdf;
}

interface VocabulariesDatasetOptions extends VocabulariesOptions {
  stream?: false;
}

interface VocabulariesStreamOptions extends VocabulariesOptions {
  stream: true;
}

export async function vocabularies (options?: VocabulariesDatasetOptions): Promise<Datasets>
export async function vocabularies (options: VocabulariesStreamOptions): Promise<Stream>
export async function vocabularies (options: VocabulariesDatasetOptions | VocabulariesStreamOptions = {}) {
  const { only = null, factory = rdf, stream = false } = options
  let selectedPrefixes: string[] = []

  if (!!only && Array.isArray(only)) {
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
    datasets.forEach((dataset) => {
      if (dataset && dataset.size) {
        combinedDataset = combinedDataset.merge(dataset)
      }
    })
    return combinedDataset.toStream()
  }

  const result: Datasets = {}
  datasets.forEach((dataset, i) => {
    if (dataset && dataset.size) {
      result[selectedPrefixes[i]] = dataset
    }
  })
  return result
}

interface LoadFileOptions {
  customSelection?: boolean;
  factory: typeof rdf;
}

export function loadFile (prefix: string, { customSelection, factory }: LoadFileOptions) {
  const parserN3 = new ParserN3()
  const readStream = loadDatasetStream(prefix)
  const quadStream = parserN3.import(readStream)
  return factory.dataset().import(quadStream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })
}

export function expand (prefixed: string): string;
export function expand (prefixed: string, types: (string | NamedNode)[]): Promise<string>;
export function expand (prefixed: string, types: (string | NamedNode)[] = []): string | Promise<string> {
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

interface ExpandWithCheckOptions {
  prefix: string;
  iri: string;
  baseIRI: string;
  types: (string | NamedNode)[];
}

export async function expandWithCheck ({ prefix, iri, baseIRI, types }: ExpandWithCheckOptions): Promise<string> {
  if (!(prefix in loadedPrefixes)) {
    // if not previously loaded, load and memoize for later use
    const datasets = await vocabularies({ only: [prefix], factory: rdf })
    loadedPrefixes[prefix] = datasets[prefix]
  }
  const dataset = loadedPrefixes[prefix]

  const typesNamedNodes = types.map(type => typeof type === 'string' ? rdf.namedNode(type) : type)
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
