import RdfjsSerializer from '@rdfjs/serializer-rdfjs'
import fs from 'fs'
import { vocabularies } from './src'
import QuadExt from 'rdf-ext/lib/Quad'

const rdfjsSerializer = new RdfjsSerializer({ module: 'ts' })

async function serializeRdfjsModule (prefix: string, quads: QuadExt[]) {
  const code = rdfjsSerializer.transform(quads)
  const path = `./src/datasets/${prefix}.ts`

  fs.writeFileSync(path, code)
}

async function main () {
  const datasets = await vocabularies()
  const codeModules = Object.entries(datasets)
    .map(([prefix, dataset]) => {
      const quadArray = dataset.toArray()
      for (const quad of quadArray) {
        if (quad.object.termType === 'Literal' &&
          !quad.object.value.includes('\\\\') &&
          quad.object.value.includes('\\')) {
          quad.object.value = quad.object.value.replace(/\\/g, '\\\\')
          quad.object.value = quad.object.value.replace(/\\\\n/g, '\\n')
        }
      }
      return serializeRdfjsModule(prefix, quadArray)
        .then(() => console.log(`Wrote module for ${prefix}`))
        .catch(e => console.error(`Failed to serialize ${prefix}: ${e.message}`))
    })

  await Promise.all(codeModules)

  const index = Object.keys(datasets).reduce((source, prefix) => {
    return `${source}\nexport { default as ${prefix} } from './${prefix}'`
  }, '')
  fs.writeFileSync('./src/datasets/index.ts', index)
}

Promise.resolve().then(() => main())
