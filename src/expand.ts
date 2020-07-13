import { NamedNode } from 'rdf-js'
import prefixes from './prefixes'

export function expand (prefixed: string): string;
export function expand (prefixed: string, types: (string | NamedNode)[]): Promise<string>;
export function expand (prefixed: string, types: (string | NamedNode)[] = []): string | Promise<string> {
  const [prefix, term] = prefixed.split(':')
  if (!prefix || !term) {
    return ''
  }

  const baseIRI = prefixes[prefix]
  if (!baseIRI) {
    throw new Error(`Unavailable prefix '${prefix}:'`)
  }

  const iri = `${baseIRI}${term}`
  if (!types.length) {
    return iri
  }

  return import('./expandWithCheck')
    .then(({ expandWithCheck }) => expandWithCheck({ prefix, iri, baseIRI, types }))
}
