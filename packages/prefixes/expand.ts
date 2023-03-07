import prefixes from './prefixes.js'

export function getParts(prefixed: string): { term: string; baseIRI: string; prefix: string } | null {
  const [prefix, term] = prefixed.split(':')
  if (!prefix || !term) {
    return null
  }

  const baseIRI = prefixes[prefix]
  if (!baseIRI) {
    throw new Error(`Unavailable prefix '${prefix}:'`)
  }

  return { prefix, term, baseIRI }
}

export function expand(prefixed: string): string {
  const parts = getParts(prefixed)
  if (!parts) {
    return ''
  }

  return `${parts.baseIRI}${parts.term}`
}
