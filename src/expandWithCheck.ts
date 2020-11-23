import { NamedNode } from 'rdf-js'
import rdf from 'rdf-ext'
import { vocabularies, Datasets } from './vocabularies'
import { expand, getParts } from './expand'

// memoizing the prefixes already used in 'expand'
export const loadedPrefixes: Datasets = {}

type Types = (string | NamedNode)[]

interface ExpandWithCheckOptions {
  prefix: string;
  iri: string;
  baseIRI: string;
  types: Types;
}

export async function expandWithCheck (prefixed: string, types: Types): Promise<string>
export async function expandWithCheck ({ prefix, iri, baseIRI, types }: ExpandWithCheckOptions): Promise<string>
export async function expandWithCheck (arg: ExpandWithCheckOptions | string, _types: Types = []): Promise<string> {
  let prefix: string
  let term: string
  let baseIRI: string
  let types: (string | NamedNode)[] = _types

  if (typeof arg === 'string') {
    const parts = getParts(arg)
    if (!parts) {
      return ''
    }

    ({ prefix, term, baseIRI } = parts)
  }
  else {
    ({ prefix, iri: term, baseIRI, types } = arg)
  }

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
      return found.toArray()[0].subject.value
    }
  }
  return ''
}
