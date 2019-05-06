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

  const Class = rdfVocabularies.expand('rdfs:Class')
  const Property = rdfVocabularies.expand('rdf:Property')
  console.log(`\nexpanded rdfs:Class => ${Class}`)
  const person = await rdfVocabularies.expand('schema:Person', [Class, Property])
  console.log(`expanded schema:Person => ${person} while checking it exists as either a rdfs:Class or rdf:Property`)
}

async function printQuadsCount (prefixSelection) {
  const result = await rdfVocabularies({ only: prefixSelection })

  Object.entries(result).forEach(([prefix, dataset]) => {
    console.log(`${prefix}: ${dataset.size} triples`)
  })
}
