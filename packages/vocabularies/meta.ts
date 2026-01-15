import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import Parser from '@rdfjs/parser-n3'
import rdf from '@zazuko/env'
import fromStream from 'rdf-dataset-ext/fromStream.js'

const metaQuads = resolve(import.meta.dirname, 'meta.nt')

export default function () {
  const parser = new Parser()
  return fromStream(rdf.dataset(), parser.import(createReadStream(metaQuads)))
}
