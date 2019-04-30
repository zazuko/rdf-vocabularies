const fs = require('fs')
const { join, resolve } = require('path')
const ParserN3 = require('@rdfjs/parser-n3')
const rdf = require('rdf-ext')

const allPrefixes = require('./prefixes')

module.exports = load
module.exports.prefixes = allPrefixes

async function load (_prefixes) {
  const customSelection = !!_prefixes && Array.isArray(_prefixes)

  let selectedPrefixes
  if (customSelection) {
    selectedPrefixes = []
    _prefixes.forEach(prefix => {
      if (prefix in allPrefixes) {
        selectedPrefixes.push(prefix)
      }
      else {
        console.warn(`unknown prefix '${prefix}'`)
      }
    })
  }
  if (!selectedPrefixes) {
    selectedPrefixes = Object.keys(allPrefixes)
  }

  const promises = selectedPrefixes.map((prefix) => loadFile(prefix, !!_prefixes))
  const datasets = await Promise.all(promises)

  const result = {}
  datasets.forEach((dataset, i) => {
    if (dataset && dataset.size) {
      result[selectedPrefixes[i]] = dataset
    }
  })
  return result
}

function loadFile (prefix, customSelection) {
  const parserN3 = new ParserN3()
  const readStream = fs.createReadStream(buildPath(prefix), { encoding: 'utf8' })
  const quadStream = parserN3.import(readStream)
  return rdf.dataset().import(quadStream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })
}

function buildPath (prefix) {
  return resolve(join('.', 'ontologies', `${prefix}.nt`))
}
