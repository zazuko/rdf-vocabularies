const rdf = require('rdf-ext')
const formats = require('@rdfjs/formats-common')
const rdfFetch = require('@rdfjs/fetch-lite')
const RdfXmlParser = require('rdfxml-streaming-parser').RdfXmlParser

formats.parsers.set('application/rdf+xml', new RdfXmlParser())

async function main () {
  const prefixes = require('./prefixes')
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
    const result = await fetch(mapping)
    console.log({
      prefix: mapping.prefix,
      dataset: result.dataset.size
    })
  }
}

async function fetch (mapping) {
  const headers = {}
  if (mapping.contentType) {
    headers['content-type'] = mapping.contentType
  }
  try {
    const res = await rdfFetch(mapping.file || mapping.uri, { factory: rdf, formats, headers })
    const dataset = await res.dataset()
    return { mapping, dataset }
  }
  catch (err) {
    console.warn(`failed fetching/processing ${mapping.prefix}`)
    throw err
  }
}

Promise.resolve().then(() => main())
