const fs = require('fs')
const rdf = require('rdf-ext')
const formats = require('@rdfjs/formats-common')
const rdfFetch = require('@rdfjs/fetch-lite')
const RdfXmlParser = require('rdfxml-streaming-parser').RdfXmlParser

function fetchWrapper (url, options, timeout) {
  // source: https://stackoverflow.com/a/46946588/4359369
  return new Promise((resolve, reject) => {
    rdfFetch(url, options).then(resolve, reject)

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
      const res = await fetchWrapper(uri, { factory: rdf, formats, headers }, 5000)
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
