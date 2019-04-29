const fs = require('fs')
const { join, resolve } = require('path')
const rdf = require('rdf-ext')

const allPrefixes = require('./prefixes')

module.exports = {
  prefixes: main
}

async function main (_prefixes) {
  let prefixes
  if (_prefixes && _prefixes.length) {
    prefixes = []
    _prefixes.forEach(prefix => {
      if (prefix in allPrefixes) {
        prefixes.push(allPrefixes[prefix])
      }
      else {
        console.warn(`unknown prefix '${prefix}'`)
      }
    })
  }
  if (!prefixes) {
    prefixes = Object.keys(allPrefixes)
  }

  const promises = prefixes.map((prefix) => loadFile(prefix, !!_prefixes))
  const datasets = await Promise.all(promises)

  const result = {}
  datasets.forEach((dataset, i) => {
    if (dataset && dataset.size) {
      result[prefixes[i]] = dataset
    }
  })
  return result
}

function loadFile (prefix, customSelection) {
  const stream = fs.createReadStream(buildPath(prefix), { encoding: 'utf8' })
  return rdf.dataset().import(stream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })
}

function buildPath (prefix) {
  return resolve(join('.', 'ontologies', `${prefix}.nt`))
}

Promise.resolve(main())
