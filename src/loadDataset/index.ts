import fs from 'fs'
import { join, resolve } from 'path'
import type prefixes from '../prefixes'

function buildPath (prefix: keyof typeof prefixes) {
  return resolve(join(__dirname, '../../ontologies', `${prefix}.nq`))
}

export function loadDatasetStream (prefix: keyof typeof prefixes) {
  return fs.createReadStream(buildPath(prefix), { encoding: 'utf8' })
}
