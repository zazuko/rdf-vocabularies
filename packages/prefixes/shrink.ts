import builtins from './prefixes.js'

/**
 * Converts an IRI to a prefixed node using a set of prefixes. By default, the
 * built-in prefixes are used. When the `extraPrefixes` argument is given, uses these prefixes
 * first, and then tries the built-in set
 *
 * @param iri
 * @param [extraPrefixes]
 */
export function shrink(iri: string, extraPrefixes: Record<string, string> = {}) {
  const prefixes = { ...builtins, ...extraPrefixes }
  const candidates = Array.from(Object.entries(prefixes)).filter(([, baseIRI]) => iri.startsWith(baseIRI))
  if (candidates.length) {
    candidates.sort(([, iri1], [, iri2]) => iri2.length - iri1.length)
    const found = candidates[0]
    return iri.replace(new RegExp(`^${found[1]}`), `${found[0]}:`)
  }
  return ''
}
