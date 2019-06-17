const { vocabularies, prefixes, expand, shrink } = require('.')

Promise.resolve().then(run)

async function run () {
  console.warn('Count all available prefixes:')
  console.warn('| Prefix | #Quads |')
  console.warn('| ---- | ---- |')
  await printQuadsCount()

  const customSelection = ['rdfs', 'owl', 'skos']
  console.warn('\nCount triples for a custom selection:', customSelection)
  await printQuadsCount(customSelection)

  console.warn('\nGet base URI for', customSelection)
  customSelection.forEach((prefix) => {
    const uri = prefixes[prefix]
    console.log(`${prefix} => ${uri}`)
  })

  console.warn('\nGet a stream', await vocabularies({ only: customSelection, stream: true }))

  const Class = expand('rdfs:Class')
  const Property = expand('rdf:Property')
  console.log(`\nexpanded rdfs:Class => ${Class}`)
  const person = await expand('schema:Person', [Class, Property])
  console.log(`expanded schema:Person => ${person} while checking it exists as either a rdfs:Class or rdf:Property`)

  console.log(`\nshrink ${expand('xsd:Boolean')} to ${shrink(expand('xsd:Boolean'))}`)
}

async function printQuadsCount (prefixSelection) {
  const result = await vocabularies({ only: prefixSelection })

  Object.entries(result).forEach(([prefix, dataset]) => {
    console.log(`| \`${prefix}\` | ${dataset.size} |`)
  })
}
