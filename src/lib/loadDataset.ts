import fs from 'fs'
import { join, resolve } from 'path'

function buildPath (prefix) {
  return resolve(join(__dirname, '../../ontologies', `${prefix}.nq`))
}

export function loadDatasetStream (prefix) {
  return fs.createReadStream(buildPath(prefix), { encoding: 'utf8' })
}
