import { createReadStream } from 'fs'
import module from 'module'
import Parser from '@rdfjs/parser-n3'
import $rdf from 'rdf-ext'

const { resolve } = module.createRequire(import.meta.url)
const metaQuads = resolve('./meta.nt')

export default function () {
  const parser = new Parser()
  return $rdf.dataset().import(parser.import(createReadStream(metaQuads)))
}
