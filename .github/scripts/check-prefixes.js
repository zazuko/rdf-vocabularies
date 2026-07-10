#!/usr/bin/env node
// Verify that packages/prefixes/prefixes.ts contains all prefixes from ontologies/*/package.json
// and that their namespaces match.

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..', '..')

const ONTOLOGIES_DIR = path.join(repoRoot, 'ontologies')
const PREFIXES_TS = path.join(repoRoot, 'packages', 'prefixes', 'prefixes.ts')

async function readOntologyPrefixes() {
  const result = new Map()
  let entries = []
  try {
    entries = await fs.readdir(ONTOLOGIES_DIR, { withFileTypes: true })
  } catch (e) {
    console.error('Cannot read ontologies directory at', ONTOLOGIES_DIR)
    throw e
  }
  for (const dirent of entries) {
    if (!dirent.isDirectory()) continue
    const pkgPath = path.join(ONTOLOGIES_DIR, dirent.name, 'package.json')
    try {
      const raw = await fs.readFile(pkgPath, 'utf8')
      const pkg = JSON.parse(raw)
      const vocab = pkg.vocabulary || {}
      const prefix = vocab.prefix
      const namespace = vocab.namespace
      if (typeof prefix === 'string' && typeof namespace === 'string') {
        result.set(prefix, namespace)
      }
    } catch {
      // ignore folders without package.json or invalid json
    }
  }
  return result
}

async function readPackagedPrefixes() {
  const src = await fs.readFile(PREFIXES_TS, 'utf8')

  const declIdx = src.indexOf('const packagedPrefixes')
  if (declIdx === -1) {
    throw new Error('Could not locate "const packagedPrefixes" in packages/prefixes/prefixes.ts')
  }
  const braceStart = src.indexOf('{', declIdx)
  if (braceStart === -1) {
    throw new Error('Could not locate opening brace for packagedPrefixes object')
  }
  // Simple brace matching to find the end of the object literal
  let i = braceStart
  let depth = 0
  let inStr = false
  let strCh = ''
  let prev = ''
  while (i < src.length) {
    const ch = src[i]
    if (inStr) {
      if (ch === strCh && prev !== '\\') inStr = false
    } else {
      if (ch === '"' || ch === '\'') { inStr = true; strCh = ch }
      else if (ch === '{') depth++
      else if (ch === '}') { depth--; if (depth === 0) { i++; break } }
    }
    prev = ch
    i++
  }
  const body = src.slice(braceStart + 1, i - 1)

  const map = new Map()
  // Match entries like: key: 'value', or 'key-with-dash': "value",
  const entryRe = /(?:['"]?)([A-Za-z0-9_-]+)(?:['"]?)\s*:\s*(['"])(.*?)\2\s*,?/g
  let m
  while ((m = entryRe.exec(body)) !== null) {
    const key = m[1]
    const value = m[3]
    map.set(key, value)
  }
  if (map.size === 0) {
    throw new Error('Parsed 0 entries from packagedPrefixes — parsing likely failed')
  }
  return map
}

function formatSuggestion(prefix, namespace) {
  const key = /[^A-Za-z0-9_]/.test(prefix) ? `'${prefix}'` : prefix
  return `  ${key}: '${namespace}',`
}

;(async () => {
  const [ontologyMap, packagedMap] = await Promise.all([
    readOntologyPrefixes(),
    readPackagedPrefixes(),
  ])

  const missing = []
  const mismatched = []

  for (const [prefix, ns] of ontologyMap) {
    if (!packagedMap.has(prefix)) {
      missing.push([prefix, ns])
    } else if (packagedMap.get(prefix) !== ns) {
      mismatched.push([prefix, ns, packagedMap.get(prefix)])
    }
  }

  const inCI = process.env.GITHUB_ACTIONS === 'true'
  const relPrefixesPath = 'packages/prefixes/prefixes.ts'

  if (missing.length === 0 && mismatched.length === 0) {
    console.log('✅ prefixes.ts contains all ontology prefixes with matching namespaces')
    // Emit a friendly notice when running in GitHub Actions
    if (inCI) {
      console.log('::notice title=Prefixes coverage OK::All ontology prefixes are present and namespaces match')
    }
    return
  }

  let msg = '\nPrefix coverage check failed for packages/prefixes/prefixes.ts\n\n'
  if (missing.length) {
    msg += `Missing prefixes (${missing.length}):\n`
    for (const [p, ns] of missing) {
      msg += `  - ${p} → ${ns}\n`
    }
    msg += '\nSuggested entries to add under const packagedPrefixes = { ... }:\n'
    for (const [p, ns] of missing) {
      msg += formatSuggestion(p, ns) + '\n'
    }
    msg += '\n'
  }
  if (mismatched.length) {
    msg += `Namespace mismatches (${mismatched.length}):\n`
    for (const [p, expected, actual] of mismatched) {
      msg += `  - ${p}: expected ${expected}, found ${actual}\n`
    }
    msg += '\nPlease update the namespace values in packagedPrefixes to match the ontology definitions.\n'
  }

  msg += 'You can update the file by running "npm run -w @zazuko/prefixes update-prefixes"'

  // Emit GitHub Actions annotations so issues show up in the PR checks UI
  if (inCI) {
    for (const [p, ns] of missing) {
      const title = `Missing prefix: ${p}`
      const details = `Add \`${p}\`: \`${ns}\` to \`${relPrefixesPath}\``
      console.log(`::error title=${title},file=${relPrefixesPath}::${details}`)
    }
    for (const [p, expected, actual] of mismatched) {
      const title = `Namespace mismatch for prefix: ${p}`
      const details = `Expected \`${expected}\`, found \`${actual}\` in \`${relPrefixesPath}\``
      console.log(`::error title=${title},file=${relPrefixesPath}::${details}`)
    }
  }

  console.error(msg)
  process.exit(1)
})().catch((err) => {
  console.error('Unexpected error during prefix check:', err)
  process.exit(1)
})
