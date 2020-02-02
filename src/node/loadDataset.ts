import fs from 'fs'
import { join, resolve } from 'path'

function buildPath (prefix: string) {
  return resolve(join(__dirname, '../../ontologies', `${prefix}.nq`))
}

export function loadDatasetStream (prefix: string) {
  return fs.createReadStream(buildPath(prefix), { encoding: 'utf8' })
}
