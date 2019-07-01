const fs = require('fs')
const rdf = require('rdf-ext')
const formats = require('@rdfjs/formats-common')
const rdfFetch = require('@rdfjs/fetch-lite')
const RdfXmlParser = require('rdfxml-streaming-parser').RdfXmlParser

formats.parsers.set('application/rdf+xml', new RdfXmlParser())

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
    const graph = rdf.namedNode(mapping.uri)
    dataset = dataset.map(({ subject, predicate, object }) => rdf.quad(subject, predicate, object, graph))

    const file = `./ontologies/${mapping.prefix}.nq`
    fs.writeFileSync(file, dataset.toCanonical())
    console.log(`${mapping.prefix}: wrote ${dataset.size} quads to ${file}`)
  }
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
    try {
      const res = await rdfFetch(uri, { factory: rdf, formats, headers })
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
      console.warn(`${mapping.prefix}: failed fetching/processing`)
      throw err
    }
  }
  return dataset
}

Promise.resolve().then(() => main())
