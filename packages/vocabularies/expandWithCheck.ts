import type { NamedNode } from '@rdfjs/types'
import rdf from 'rdf-ext'
import { expand, getParts } from './expand.js'
import { vocabularies, Datasets } from './vocabularies.js'

// memoizing the prefixes already used in 'expand'
export const loadedPrefixes: Datasets = {}

type Types = (string | NamedNode)[]

export async function expandWithCheck(prefixed: string, types: Types): Promise<string> {
  const parts = getParts(prefixed)
  if (!parts) {
    return ''
  }

  const { prefix, term, baseIRI } = parts

  if (!(prefix in loadedPrefixes)) {
    // if not previously loaded, load and memoize for later use
    const datasets = await vocabularies({ only: [prefix], factory: rdf })
    loadedPrefixes[prefix] = datasets[prefix]
  }
  const dataset = loadedPrefixes[prefix]

  const iri = `${baseIRI}${term}`
  const typesNamedNodes = types.map(type => typeof type === 'string' ? rdf.namedNode(type) : type)
  const typeTerm = rdf.namedNode(expand('rdf:type'))
  const graph = rdf.namedNode(baseIRI)
  for (const typeNamedNode of typesNamedNodes) {
    const found = dataset.match(rdf.namedNode(iri), typeTerm, typeNamedNode, graph)
    if (found.size) {
      return [...found][0].subject.value
    }
  }
  return ''
}
