/* eslint-disable @typescript-eslint/no-var-requires */

import fs from 'fs'
import rdf from 'rdf-ext'
import formats from '@rdfjs/formats-common'
import rdfFetch from '@rdfjs/fetch-lite'
import { RdfXmlParser } from 'rdfxml-streaming-parser'
import { expand, loadFile } from './src/lib'
import { NamedNode, DatasetCore } from 'rdf-js'

type RDFFetchOptions = RequestInit & { factory: any; formats: any }
type RDFFetchResponse = Response & { dataset(): Promise<DatasetCore> }

// this script gets your IP banned from w3.org unless you wait long enough between w3.org requests
const w3Timeout = 5000
let lastW3FetchAt = 0

// other workarounds to avoid w3.org banning us for making 30 requests over 10 minutes every two months...
const randomInt = (a: number, b: number) => Math.floor(a + Math.random() * (b + 1 - a))
const fetchOptions = () => ({
  'credentials': 'omit',
  'headers': {
    'accept-language': 'en-US,en',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': `Mozilla/${randomInt(4, 5)}.0 (Macintosh; Intel Mac OS X ` +
      `10_${randomInt(0, 15)}_${randomInt(1, 5)}) ` +
      `AppleWebKit/${randomInt(400, 537)}.${randomInt(1, 40)} (KHTML, like Gecko) ` +
      `Chrome/${randomInt(11, 77)}.0.${randomInt(1, 6000)}.120 Safari/${randomInt(400, 537)}.${randomInt(1, 40)}`
  },
  'referrerPolicy': 'no-referrer-when-downgrade',
  'body': null,
  'method': 'GET',
  'mode': 'cors'
})

const expandToNamedNode = (str: string): NamedNode => rdf.namedNode(expand(str))

async function wait (milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function fetchWrapper (url: string, options: RDFFetchOptions, timeout: number): Promise<RDFFetchResponse> {
  // source: https://stackoverflow.com/a/46946588/4359369
  return new Promise((resolve, reject) => {
    rdfFetch(url, { ...fetchOptions(), ...options }).then(resolve, reject)

    if (timeout) {
      const e = new Error('Connection timed out')
      setTimeout(reject, timeout, e)
    }
  })
}

async function fetch (mappings, indexOnly = false) {
  const prefix = mappings.prefix
  mappings = mappings.files || [mappings]

  let dataset = rdf.dataset()

  for (const mapping of (indexOnly ? [] : mappings)) {
    const headers = {}
    if (mapping.mediaType) {
      headers['accept'] = mapping.mediaType
    }
    const uri = mapping.file || mapping.uri
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
        console.warn(`${mapping.prefix}: HTTP${res.status} for ${uri}`)
      }
      if (mapping.mediaType) {
        res.headers.set('content-type', mapping.mediaType)
      }
      const fetchedDataset = await res.dataset()
      dataset = dataset.merge(fetchedDataset)
    }
    catch (err) {
      console.warn(`${prefix}: failed fetching/processing: ${err.message}`)
    }
  }

  if (!dataset.size) {
    return loadFile(prefix, { factory: rdf, customSelection: false })
  }
  return dataset
}

function firstVal (dataset) {
  if (dataset.size) {
    const english = dataset.toArray().find(({ object }) => object.language === 'en')
    if (english) {
      return english.object.value
    }
    const noLanguage = dataset.toArray().find(({ object }) => object.language === '')
    if (noLanguage) {
      return noLanguage.object.value
    }
    return dataset.toArray()[0].object.value
  }
}

function getTitle (dataset) {
  const potentialValues = [
    firstVal(dataset.match(null, rdf.namedNode(expand('dc11:title')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('dcterms:title')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('rdfs:label'))))
  ].filter(Boolean)
  return potentialValues.length ? potentialValues[0] : ''
}

function getDescription (dataset) {
  const potentialValues = [
    firstVal(dataset.match(null, rdf.namedNode(expand('dc11:description')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('dcterms:description')))),
    firstVal(dataset.match(null, rdf.namedNode(expand('rdfs:comment'))))
  ].filter(Boolean)
  return potentialValues.length ? potentialValues[0] : ''
}

function generateIndex (mappings, dataset) {
  const vocabUri = rdf.namedNode(mappings.uri)
  const filteredDataset = dataset.match(vocabUri)
  const prefixDataset = rdf.dataset()
  const subject = rdf.namedNode(`https://prefix.zazuko.com/${mappings.prefix}:`)
  const title = getTitle(filteredDataset)
  const description = getDescription(filteredDataset)

  if (title) {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('dcterms:title'), rdf.literal(title))
    )
  }
  if (description) {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('dcterms:description'), rdf.literal(description))
    )
  }
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdf:type'), expandToNamedNode('rdfa:PrefixMapping'))
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdfa:prefix'), rdf.literal(mappings.prefix))
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('rdfa:uri'), rdf.namedNode(mappings.uri))
  )
  prefixDataset.add(
    rdf.quad(subject, expandToNamedNode('dbo:filename'), rdf.literal(`ontologies/${mappings.prefix}.nq`))
  )
  const files = Array.isArray(mappings.files)
    ? (mappings.files || [mappings]).map(({ file }) => file)
    : [mappings.file || mappings.uri]
  files.filter(Boolean).forEach((file) => {
    prefixDataset.add(
      rdf.quad(subject, expandToNamedNode('rdfs:isDefinedBy'), rdf.namedNode(file))
    )
  })
  return prefixDataset
}

async function main () {
  const prefixes = require('./lib/node/prefixes').default
  const overrides = require('./overrides')
  let indexDataset = rdf.dataset()

  // merge prefixes with overrides
  for (const prefix in prefixes) {
    const uri = prefixes[prefix]
    const override = overrides[prefix]
    prefixes[prefix] = Object.assign({ uri, prefix }, override)
  }

  for (const prefix in prefixes) {
    const mappings = prefixes[prefix]
    mappings.prefix = prefix
    if (mappings.skip) {
      continue
    }
    console.log(`processing ${mappings.prefix}`)
    let dataset = await fetch(mappings)
    if (dataset.size) {
      const graph = rdf.namedNode(mappings.uri)
      dataset = dataset.map(({ subject, predicate, object }) => rdf.quad(subject, predicate, object, graph))

      const file = `./ontologies/${mappings.prefix}.nq`
      fs.writeFileSync(file, dataset.toCanonical())
      console.log(`${mappings.prefix}: wrote ${dataset.size} quads to ${file}`)

      indexDataset = indexDataset.merge(generateIndex(mappings, dataset))
    }
  }

  fs.writeFileSync(`./ontologies/_index.nq`, indexDataset.toCanonical())
}

Promise.resolve().then(() => main())
