import RdfjsSerializer from '@rdfjs/serializer-rdfjs'
import DatasetExt from 'rdf-ext/lib/Dataset'
import fs from 'fs'
import { vocabularies } from './src'

const rdfjsSerializer = new RdfjsSerializer({ module: 'ts' })

async function serializeRdfjsModule (prefix: string, dataset: DatasetExt) {
  const code = rdfjsSerializer.transform(dataset.toArray())
  const path = `./src/datasets/${prefix}.ts`

  fs.writeFileSync(path, code)
}

async function main () {
  const datasets = await vocabularies()

  const codeModules = Object.entries(datasets)
    .map(([prefix, dataset]) => {
      return serializeRdfjsModule(prefix, dataset)
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
