import { create } from '@zazuko/vocabulary-loader'
import prefixes from './prefixes.js'

export { loadFile, Datasets } from '@zazuko/vocabulary-loader'

export const vocabularies = create(prefixes)
