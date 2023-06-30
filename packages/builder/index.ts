import { program } from 'commander'
import { buildModule } from './modules.js'
import { buildDatasets } from './datasets.js'

program
  .command('datasets [indexBase]')
  .action(async (indexBase = 'https://prefix.zazuko.com/') => {
    const path = process.cwd()
    const packageJson = await import(`${path}/package.json`, { assert: { type: 'json' } })

    if (!packageJson.default.vocabulary) {
      throw new Error('Missing key "vocabulary" in package.json')
    }

    await buildDatasets(
      path,
      packageJson.default.name,
      indexBase,
      packageJson.default.vocabulary,
    )
  })

program
  .command('module')
  .action(async () => {
    const path = process.cwd()
    const packageJson = await import(`${path}/package.json`, { assert: { type: 'json' } })
    const prefix = packageJson.default.vocabulary.prefix
    return buildModule(process.cwd(), prefix)
  })

program.parseAsync()
