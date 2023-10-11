/* eslint-disable no-console */
import { Stream, DataFactory, DatasetCore, DatasetCoreFactory } from 'rdf-js'
import { Readable } from 'stream'
import rdf from '@zazuko/env'
import type { Environment } from '@rdfjs/environment/Environment.js'
import ParserN3 from '@rdfjs/parser-n3'
import fromStream from 'rdf-dataset-ext/fromStream.js'
import addAll from 'rdf-dataset-ext/addAll.js'
import toStream from 'rdf-dataset-ext/toStream.js'
import { loadDatasetStream } from './lib/loadDataset.js'

export type Datasets<P extends Record<string, string>> = Record<keyof P, DatasetCore>

export interface VocabulariesOptions<P extends Record<string, string>> {
  only?: (keyof P)[] | null
  factory?: Environment<DatasetCoreFactory | DataFactory>
}

export interface VocabulariesDatasetOptions<P extends Record<string, string>> extends VocabulariesOptions<P> {
  stream?: false
}

export interface VocabulariesStreamOptions<P extends Record<string, string>> extends VocabulariesOptions<P> {
  stream: true
}

export interface Loader<P extends Record<string, string>> {
  (options?: VocabulariesDatasetOptions<P>): Promise<Datasets<P>>
  (options: VocabulariesStreamOptions<P>): Promise<Stream & Readable>
}

export function create<P extends Record<string, string>>(prefixMap: P): Loader<P> {
  return async function vocabularies({ only = null, factory = rdf, stream = false }: VocabulariesDatasetOptions<P> | VocabulariesStreamOptions<P> = {}) {
    let selectedPrefixes: (keyof typeof prefixMap)[] = []

    if (!!only && Array.isArray(only)) {
      only.forEach((prefix: keyof P) => {
        if (prefix in prefixMap) {
          selectedPrefixes.push(prefix)
        } else {
          console.warn(`unknown prefix '${String(prefix)}'`)
        }
      })
    }
    if (!selectedPrefixes.length) {
      selectedPrefixes = Object.keys(prefixMap)
    }

    const promises = selectedPrefixes.map((prefix) => loadFile(prefix, { customSelection: !!only, factory }))
    const datasets = await Promise.all(promises)

    if (stream !== false) {
      let combinedDataset = factory.dataset()
      datasets.forEach((dataset) => {
        if (dataset && dataset.size) {
          combinedDataset = addAll(combinedDataset, dataset)
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return toStream(combinedDataset) as any
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: Datasets<P> = {} as any
    datasets.forEach((dataset, i) => {
      if (dataset && dataset.size) {
        result[selectedPrefixes[i]] = dataset
      }
    })
    return result
  }
}

interface LoadFileOptions {
  customSelection?: boolean
  factory: Environment<DatasetCoreFactory>
}

export async function loadFile<P extends Record<string, string>>(prefix: keyof P, { customSelection, factory }: LoadFileOptions) {
  try {
    const parserN3 = new ParserN3()
    const readStream = await loadDatasetStream(String(prefix))
    const quadStream = parserN3.import(readStream)
    return fromStream(factory.dataset(), quadStream)
  } catch {
    if (customSelection) {
      console.warn(`unavailable prefix '${String(prefix)}'`)
    }
  }
}
