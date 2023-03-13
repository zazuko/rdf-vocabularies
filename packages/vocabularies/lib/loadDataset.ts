import fs from 'fs'
import module from 'module'
import type prefixes from '../prefixes.js'

const { resolve } = module.createRequire(import.meta.url)

export async function loadDatasetStream(prefix: keyof typeof prefixes) {
  return fs.createReadStream(resolve(`@vocabulary/${String(prefix)}/${String(prefix)}.nq`), { encoding: 'utf8' })
}
