const fs = require('fs')
const rdf = require('rdf-ext')
const formats = require('@rdfjs/formats-common')
const rdfFetch = require('@rdfjs/fetch-lite')
const RdfXmlParser = require('rdfxml-streaming-parser').RdfXmlParser

// this script gets your IP banned from w3.org unless you wait long enough between w3.org requests
const w3Timeout = 60000
let lastW3FetchAt = 0

// other workarounds to avoid w3.org banning us for making 30 requests over 10 minutes every two months...
const randomInt = (a, b) => Math.floor(a + Math.random() * (b + 1 - a))
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

async function wait (milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function fetchWrapper (url, options, timeout) {
  // source: https://stackoverflow.com/a/46946588/4359369
  return new Promise((resolve, reject) => {
    rdfFetch(url, { ...fetchOptions(), ...options }).then(resolve, reject)

    if (timeout) {
      const e = new Error('Connection timed out')
      setTimeout(reject, timeout, e)
    }
  })
}

async function fetch (mappings) {
  mappings = mappings.files || [mappings]

  let dataset = rdf.dataset()

  for (const mapping of mappings) {
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
      console.warn(`${mapping.prefix}: failed fetching/processing: ${err.message}`)
    }
  }
  return dataset
}

async function main () {
  const prefixes = require('./lib/node/prefixes').default
  const overrides = require('./overrides')

  // merge prefixes with overrides
  for (const prefix in prefixes) {
    const uri = prefixes[prefix]
    const override = overrides[prefix]
    prefixes[prefix] = Object.assign({ uri, prefix }, override)
  }

  for (const prefix in prefixes) {
    const mapping = prefixes[prefix]
    if (mapping.skip) {
      continue
    }
    console.log(`processing ${mapping.prefix}`)
    let dataset = await fetch(mapping)
    if (dataset.size) {
      const graph = rdf.namedNode(mapping.uri)
      dataset = dataset.map(({ subject, predicate, object }) => rdf.quad(subject, predicate, object, graph))

      const file = `./ontologies/${mapping.prefix}.nq`
      fs.writeFileSync(file, dataset.toCanonical())
      console.log(`${mapping.prefix}: wrote ${dataset.size} quads to ${file}`)
    }
  }
}

Promise.resolve().then(() => main())
