import fs from 'fs/promises'
import { resolve } from 'path'
import { Readable } from 'stream'
import RdfjsSerializer from '@rdfjs/serializer-rdfjs'
import { fromFile } from 'rdf-utils-fs'
import { array } from 'get-stream'
import { Quad } from '@rdfjs/types'

const rdfjsSerializer = new RdfjsSerializer({ module: 'ts' })

export async function buildModule(path: string) {
  const dataset = await array<Quad>(<Readable>fromFile(resolve(path, 'dataset.nq')))

  const quadArray = [...dataset]
  for (const quad of quadArray) {
    if (quad.object.termType === 'Literal' &&
          !quad.object.value.includes('\\\\') &&
          quad.object.value.includes('\\')) {
      quad.object.value = quad.object.value.replace(/\\/g, '\\\\')
      quad.object.value = quad.object.value.replace(/\\\\n/g, '\\n')
    }
  }

  const code = rdfjsSerializer.transform(quadArray)
  await fs.writeFile('./index.ts', code)
}
