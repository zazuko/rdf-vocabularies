#!/usr/bin/env node
const program = require('commander')
const { promisify } = require('util')
const stream = require('readable-stream')
const { loadDatasetStream } = require('../loadDataset')
const prefixes = require('../prefixes')

const finished = promisify(stream.finished)

async function forwardStream (prefix) {
  const vocabStream = await loadDatasetStream(prefix)
  vocabStream.pipe(process.stdout)

  return finished(vocabStream)
    .catch(e => {
      console.error('Failed to load vocabulary. Is the prefix correct?')
      throw e
    })
}

program
  .command('namespace <namespace>')
  .action((namespace) => {
    const [prefix] = Object.entries(prefixes.default)
      .find(([, ns]) => ns === namespace)

    if (!prefix) {
      console.error('Failed to load vocabulary. Namespace not found')
      process.exit(1)
    }

    return forwardStream(prefix)
  })

program
  .command('prefix <prefix>')
  .action(forwardStream)

program.parseAsync(process.argv).catch(() => process.exit(1))
