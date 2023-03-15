/* eslint-disable no-console */
import { Stream, DataFactory } from 'rdf-js'
import { Readable } from 'stream'
import rdf from 'rdf-ext'
import type { Environment } from '@rdfjs/environment/Environment.js'
import prefixes from '@zazuko/prefixes'
import type { DatasetExt } from 'rdf-ext/lib/Dataset.js'
import ParserN3 from '@rdfjs/parser-n3'
import { DatasetFactory } from 'rdf-ext/DatasetFactory.js'
import { loadDatasetStream } from './lib/loadDataset.js'

export type Datasets = Record<keyof typeof prefixes, DatasetExt>

interface VocabulariesOptions {
  only?: (keyof typeof prefixes)[] | null
  factory?: Environment<DatasetFactory | DataFactory>
}

interface VocabulariesDatasetOptions extends VocabulariesOptions {
  stream?: false
}

interface VocabulariesStreamOptions extends VocabulariesOptions {
  stream: true
}

export async function vocabularies (options?: VocabulariesDatasetOptions): Promise<Datasets>
export async function vocabularies (options: VocabulariesStreamOptions): Promise<Stream & Readable>
export async function vocabularies({ only = null, factory = rdf, stream = false }: VocabulariesDatasetOptions | VocabulariesStreamOptions = {}) {
  let selectedPrefixes: (keyof typeof prefixes)[] = []

  if (!!only && Array.isArray(only)) {
    only.forEach((prefix: keyof typeof prefixes) => {
      if (prefix in prefixes) {
        selectedPrefixes.push(prefix)
      } else {
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
    let combinedDataset: any = factory.dataset()
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
  customSelection?: boolean
  factory: Environment<DatasetFactory>
}

export async function loadFile(prefix: keyof typeof prefixes, { customSelection, factory }: LoadFileOptions) {
  try {
    const parserN3 = new ParserN3()
    const readStream = await loadDatasetStream(prefix)
    const quadStream = parserN3.import(readStream)
    return factory.dataset().import(quadStream)
  } catch {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  }
}
