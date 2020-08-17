import prefixes from './prefixes'

export function shrink (iri: string) {
  const candidates = Array.from(Object.entries(prefixes)).filter(([, baseIRI]) => iri.startsWith(baseIRI))
  if (candidates.length) {
    candidates.sort(([, iri1], [, iri2]) => iri2.length - iri1.length)
    const found = candidates[0]
    return iri.replace(new RegExp(`^${found[1]}`), `${found[0]}:`)
  }
  return ''
}
