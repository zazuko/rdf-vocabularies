import { NamedNode } from 'rdf-js'
import rdf from 'rdf-ext'
import { vocabularies, Datasets } from './vocabularies'
import { expand } from './expand'

// memoizing the prefixes already used in 'expand'
export const loadedPrefixes: Datasets = {}

interface ExpandWithCheckOptions {
  prefix: string;
  iri: string;
  baseIRI: string;
  types: (string | NamedNode)[];
}

export async function expandWithCheck ({ prefix, iri, baseIRI, types }: ExpandWithCheckOptions): Promise<string> {
  if (!(prefix in loadedPrefixes)) {
    // if not previously loaded, load and memoize for later use
    const datasets = await vocabularies({ only: [prefix], factory: rdf })
    loadedPrefixes[prefix] = datasets[prefix]
  }
  const dataset = loadedPrefixes[prefix]

  const typesNamedNodes = types.map(type => typeof type === 'string' ? rdf.namedNode(type) : type)
  const typeTerm = rdf.namedNode(expand('rdf:type'))
  const graph = rdf.namedNode(baseIRI)
  for (const typeNamedNode of typesNamedNodes) {
    const found = dataset.match(rdf.namedNode(iri), typeTerm, typeNamedNode, graph)
    if (found.size) {
      return found.toArray()[0].subject.value
    }
  }
  return ''
}
