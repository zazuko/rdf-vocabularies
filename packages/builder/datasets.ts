/* eslint-disable no-console,@typescript-eslint/no-explicit-any */
import fs from 'fs'
import { resolve } from 'path'
import rdf from '@zazuko/env-node'
import formats from '@rdfjs/formats'
import rdfFetch, { FactoryInit, DatasetResponse } from '@rdfjs/fetch-lite'
import { RdfXmlParser } from 'rdfxml-streaming-parser'
import { DatasetCore, NamedNode } from '@rdfjs/types'
import { expand } from '@zazuko/prefixes'
import type { Dataset } from '@zazuko/env/lib/Dataset.js'
import { Override } from './lib/overrides.js'
import rawFetch from './lib/fetch.js'

interface Vocab extends Override {
  prefix: string
  namespace: string
}

// this script gets your IP banned from w3.org unless you wait long enough between w3.org requests
const w3Timeout = 5000
let lastW3FetchAt = 0

// other workarounds to avoid w3.org banning us for making 30 requests over 10 minutes every two months...
const randomInt = (a: number, b: number) => Math.floor(a + Math.random() * (b + 1 - a))
const fetchOptions = ({ headers, ...rest }: FactoryInit<DatasetCore>): FactoryInit<DatasetCore> => ({
  credentials: 'omit',
  headers: {
    'accept-language': 'en-US,en',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': `Mozilla/${randomInt(4, 5)}.0 (Macintosh; Intel Mac OS X ` +
      `10_${randomInt(0, 15)}_${randomInt(1, 5)}) ` +
      `AppleWebKit/${randomInt(400, 537)}.${randomInt(1, 40)} (KHTML, like Gecko) ` +
      `Chrome/${randomInt(11, 77)}.0.${randomInt(1, 6000)}.120 Safari/${randomInt(400, 537)}.${randomInt(1, 40)}`,
    ...headers,
  },
  referrerPolicy: 'no-referrer-when-downgrade',
  body: null,
  method: 'GET',
  mode: 'cors',
  ...rest,
})

const expandToNamedNode = (str: string): NamedNode => rdf.namedNode(expand(str))

async function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function fetchWrapper(url: string, options: FactoryInit<DatasetCore>, timeout: number) {
  // source: https://stackoverflow.com/a/46946588/4359369
  return new Promise((resolve, reject) => {
    rdfFetch <DatasetCore>(url, { ...fetchOptions(options), fetch: rawFetch }).then(resolve, reject)

    if (timeout) {
      const e = new Error('Connection timed out')
      setTimeout(reject, timeout, e)
    }
  }) as Promise<DatasetResponse<DatasetCore>>
}

async function datasets(vocab: Vocab, indexOnly = false): Promise<Dataset> {
  const prefix = vocab.prefix
  const mappings = vocab.files || [vocab]

  let dataset = rdf.dataset()

  for (const mapping of (indexOnly ? [] : mappings)) {
    const headers: HeadersInit = {}
    if (mapping.mediaType) {
      headers.accept = mapping.mediaType
    }
    const uri = mapping.file || vocab.namespace
    const xmlParserOptions = { allowDuplicateRdfIds: true }
    if (mapping.xmlParserOptions) {
      Object.assign(xmlParserOptions, mapping.xmlParserOptions)
    }
    formats.parsers.set('application/rdf+xml', new RdfXmlParser(xmlParserOptions))

    try {
      const w3FetchDelay = Date.now() - lastW3FetchAt
      if (uri.includes('www.w3.org')) {
        if (w3FetchDelay < w3Timeout) {
          const timeout = (w3Timeout - w3FetchDelay) + randomInt(5000, 15000)
          console.log(`throttling w3.org fetch for ${(timeout / 1000).toFixed(2)}s`)
          await wait(timeout)
        }
        lastW3FetchAt = Date.now()
      }
      const res = await fetchWrapper(uri, { factory: rdf, formats, headers }, 30000)
      if (!res.ok) {
        console.warn(`${vocab.prefix}: HTTP${res.status} for ${uri}`)
      }
      if (mapping.mediaType) {
        res.headers.set('content-type', mapping.mediaType)
      }
      const fetchedDataset = await res.dataset()
      dataset = dataset.addAll(fetchedDataset)
    } catch (err: any) {
      console.warn(`${prefix}: failed fetching/processing: ${err.message}`)
    }
  }

  if (!dataset.size) {
    // return loadFile(prefix, { factory: rdf, customSelection: false })
  }
  return dataset
}

function firstVal(dataset: DatasetCore) {
  if (dataset.size) {
    const english = [...dataset].find(({ object }: any) => object.language === 'en')
    if (english) {
      return english.object.value
    }
    const noLanguage = [...dataset].find(({ object }: any) => object.language === '')
    if (noLanguage) {
      return noLanguage.object.value
    }
    return [...dataset][0].object.value
  }
}

function getTitle(dataset: DatasetCore): string {
  const potentialValues = [
    firstVal(dataset.match(null, rdf.namedNode(expand('dc11:title')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('dcterms:title')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('rdfs:label')))),
  ].filter(Boolean)

  if (potentialValues.length && potentialValues[0]) {
    return potentialValues[0]
  }
  return ''
}

function getDescription(dataset: DatasetCore): string {
  const potentialValues = [
    firstVal(dataset.match(null, rdf.namedNode(expand('dc11:description')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('dcterms:description')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('rdfs:comment')))),
  ].filter(Boolean)

  if (potentialValues.length && potentialValues[0]) {
    return potentialValues[0]
  }
  return ''
}

function generateIndex(subject: NamedNode, packageName: string, mappings: Vocab, dataset: Dataset) {
  const vocabUri = rdf.namedNode(mappings.namespace)
  let filteredDataset = dataset.match(vocabUri)
  if (vocabUri.value.endsWith('/') || vocabUri.value.endsWith('#')) {
    const vocabUri2 = rdf.namedNode(vocabUri.value.substr(0, vocabUri.value.length - 1))
    filteredDataset = filteredDataset.addAll(dataset.match(vocabUri2))
  }

  const prefixDataset = rdf.dataset()
  const title = getTitle(filteredDataset)
  const description = getDescription(filteredDataset)

  if (title) {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('dcterms:title'), rdf.literal(title.trim())),
    )
  }
  if (description) {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('dcterms:description'), rdf.literal(description.trim())),
    )
  }
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdf:type'), expandToNamedNode('rdfa:PrefixMapping')),
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdfa:prefix'), rdf.literal(mappings.prefix)),
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdfa:uri'), rdf.namedNode(mappings.namespace)),
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('dbo:filename'), rdf.literal(`${packageName}/${mappings.prefix}.nq`)),
  )
  const files = Array.isArray(mappings.files)
    ? (mappings.files || [mappings]).map(({ file }: any) => file)
    : [mappings.file || mappings.namespace]
  files.filter(Boolean).forEach((file: string) => {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('rdfs:isDefinedBy'), rdf.namedNode(file)),
    )
  })
  return prefixDataset
}

export async function buildDatasets(path: string, packageName: string, indexBase: string, vocab: Vocab) {
  const indexPath = resolve(path, 'meta.nt')

  let indexDataset = rdf.dataset()

  let dataset = await datasets(vocab)
  if (dataset && dataset.size) {
    const graph = rdf.namedNode(vocab.namespace)
    dataset = rdf.dataset([...dataset].map(({ subject, predicate, object }) => rdf.quad(subject, predicate, object, graph)))

    const file = resolve(path, `${vocab.prefix}.nq`)
    fs.writeFileSync(file, dataset.toCanonical())
    console.log(`${vocab.prefix}: wrote ${dataset.size} quads to ${file}`)

    const indexSubject = rdf.namedNode(`${indexBase}${vocab.prefix}:`)
    indexDataset.deleteMatches(indexSubject, null, null, null)
    indexDataset = indexDataset.merge(generateIndex(indexSubject, packageName, vocab, dataset))
  }

  fs.writeFileSync(indexPath, indexDataset.toCanonical())
}
