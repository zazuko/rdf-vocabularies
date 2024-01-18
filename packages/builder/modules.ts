import { promises as fs } from 'fs'
import { resolve } from 'path'
import RdfjsSerializer from '@rdfjs/serializer-rdfjs'
import { array } from 'get-stream'
import { Quad } from '@rdfjs/types'
import rdf from '@zazuko/env-node'

const rdfjsSerializer = new RdfjsSerializer({ module: 'ts' })

export async function buildModule(path: string, prefix: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataset = await array<Quad>(<any>rdf.fromFile(resolve(path, `${prefix}.nq`)))

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
