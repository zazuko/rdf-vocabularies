import { create } from '@zazuko/vocabulary-loader'
import prefixes from './prefixes.js'

export type { Datasets } from '@zazuko/vocabulary-loader'
export { loadFile } from '@zazuko/vocabulary-loader'

export const vocabularies = create(prefixes)
