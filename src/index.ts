import { expandWithCheck } from './expandWithCheck'
import { expand as _expand } from './expand'
import { NamedNode } from 'rdf-js'

export { default as prefixes } from './prefixes'
export { vocabularies, loadFile } from './vocabularies'
export { shrink } from './shrink'
export { expandWithCheck } from './expandWithCheck'

export function expand (prefixed: string): string;
export function expand (prefixed: string, types: (string | NamedNode)[]): Promise<string>;
export function expand (prefixed: string, types: (string | NamedNode)[] = []): string | Promise<string> {
  if (types && types.length) {
    return expandWithCheck(prefixed, types)
  }

  return _expand(prefixed)
}
