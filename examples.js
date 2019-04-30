const rdfVocabularies = require('.')

Promise.resolve().then(run)

async function run () {
  console.warn('Count all available prefixes:')
  await printQuadsCount()

  const customSelection = ['rdfs', 'owl', 'skos']
  console.warn('\nCount triples for a custom selection:', customSelection)
  await printQuadsCount(customSelection)

  console.warn('\nGet base URI for', customSelection)
  customSelection.forEach((prefix) => {
    const uri = rdfVocabularies.prefixes[prefix]
    console.log(`${prefix} => ${uri}`)
  })

  console.warn('\nGet a stream', await rdfVocabularies({ only: customSelection, stream: true }))
}

async function printQuadsCount (prefixSelection) {
  const result = await rdfVocabularies({ only: prefixSelection })

  Object.entries(result).forEach(([prefix, dataset]) => {
    console.log(`${prefix}: ${dataset.size} triples`)
  })
}
