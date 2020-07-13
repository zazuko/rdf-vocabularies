import prefixes from './prefixes'

export function shrink (iri: string) {
  const found = Array.from(Object.entries(prefixes)).find(([, baseIRI]) => iri.startsWith(baseIRI))
  if (found) {
    return iri.replace(new RegExp(`^${found[1]}`), `${found[0]}:`)
  }
  return ''
}
