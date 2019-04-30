const rdfPrefixes = require('.')

Promise.resolve().then(run)

async function run () {
  console.warn('Count all available prefixes:')
  await printQuadsCount()

  const customSelection = ['rdfs', 'owl', 'skos']
  console.warn('\nCount triples for a custom selection:', customSelection)
  await printQuadsCount(customSelection)

  console.warn('\nGet base URI for', customSelection)
  customSelection.forEach((prefix) => {
    const uri = rdfPrefixes.prefixes[prefix]
    console.log(`${prefix} => ${uri}`)
  })
}

async function printQuadsCount (prefixSelection) {
  const result = await rdfPrefixes({ only: prefixSelection })

  Object.entries(result).forEach(([prefix, dataset]) => {
    console.log(`${prefix}: ${dataset.size} triples`)
  })
}
