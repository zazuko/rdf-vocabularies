import { createReadStream } from 'fs'
import module from 'module'
import Parser from '@rdfjs/parser-n3'
import rdf from '@zazuko/env'
import fromStream from 'rdf-dataset-ext/fromStream.js'

const { resolve } = module.createRequire(import.meta.url)
const metaQuads = resolve('./meta.nt')

export default function () {
  const parser = new Parser()
  return fromStream(rdf.dataset(), parser.import(createReadStream(metaQuads)))
}
