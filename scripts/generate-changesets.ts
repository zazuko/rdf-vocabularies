import { execSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Readable } from 'node:stream'
import rdf from '@zazuko/env-node'
import type { DatasetCore } from '@rdfjs/types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const repoRoot = path.resolve(__dirname, '..')

export type BumpType = 'major' | 'minor' | 'patch' | 'none'

export interface BumpDetails {
  oldQuadsCount: number
  newQuadsCount: number
  addedTerms: string[]
  removedTerms: string[]
  changedQuads: boolean
}

export interface BumpResult {
  bump: BumpType
  reason: string
  details: BumpDetails
}

export interface VocabularyBumpInspection {
  packageName: string
  prefix: string
  namespace: string
  filePath: string
  relativeFilePath: string
  bump: BumpType
  reason: string
  details: BumpDetails
}

export async function parseNQuads(content: string) {
  const dataset = rdf.dataset()
  if (!content || !content.trim()) {
    return dataset
  }
  const stream = rdf.formats.parsers.import('application/n-quads', Readable.from([content]))
  if (!stream) {
    throw new Error('N-Quads parser not found in rdf.formats.parsers')
  }
  return dataset.import(stream)
}

export function detectPrimaryNamespace(dataset: DatasetCore, preferredNamespace?: string): string {
  if (preferredNamespace) {
    for (const quad of dataset) {
      if (quad.subject.termType === 'NamedNode' && quad.subject.value.startsWith(preferredNamespace)) {
        return preferredNamespace
      }
    }
  }

  const counts = new Map<string, number>()
  for (const quad of dataset) {
    if (quad.subject.termType === 'NamedNode') {
      const iri = quad.subject.value
      const sep = Math.max(iri.lastIndexOf('#'), iri.lastIndexOf('/'))
      if (sep > 0) {
        const base = iri.slice(0, sep + 1)
        counts.set(base, (counts.get(base) || 0) + 1)
      }
    }
  }

  let bestNamespace = ''
  let maxCount = 0
  for (const [base, count] of counts.entries()) {
    if (count > maxCount) {
      maxCount = count
      bestNamespace = base
    }
  }

  return bestNamespace || preferredNamespace || ''
}

export interface ExtractedTerms {
  namespace: string
  terms: Map<string, string> // localName -> full IRI
}

export function extractNamespaceTerms(dataset: DatasetCore, preferredNamespace?: string): ExtractedTerms {
  const namespace = detectPrimaryNamespace(dataset, preferredNamespace)
  const terms = new Map<string, string>()

  for (const quad of dataset) {
    if (quad.subject.termType === 'NamedNode') {
      const iri = quad.subject.value
      if (namespace && iri.startsWith(namespace)) {
        const local = iri.slice(namespace.length)
        if (local) {
          terms.set(local, iri)
        }
      }
    }
  }

  // If no terms matched the namespace prefix, fall back to all named node subjects
  if (terms.size === 0 && dataset.size > 0) {
    for (const quad of dataset) {
      if (quad.subject.termType === 'NamedNode') {
        const iri = quad.subject.value
        const sep = Math.max(iri.lastIndexOf('#'), iri.lastIndexOf('/'))
        const local = sep > 0 ? iri.slice(sep + 1) : iri
        terms.set(local, iri)
      }
    }
  }

  return { namespace, terms }
}

export async function computeBump(
  oldContent: string,
  newContent: string,
  options: { namespace?: string; prefix?: string } = {},
): Promise<BumpResult> {
  const [oldDataset, newDataset] = await Promise.all([
    parseNQuads(oldContent),
    parseNQuads(newContent),
  ])

  const prefix = options.prefix || ''
  const oldExtracted = extractNamespaceTerms(oldDataset, options.namespace)
  const newExtracted = extractNamespaceTerms(newDataset, options.namespace)

  const removedKeys = [...oldExtracted.terms.keys()].filter(k => !newExtracted.terms.has(k))
  const addedKeys = [...newExtracted.terms.keys()].filter(k => !oldExtracted.terms.has(k))

  const removedTerms = removedKeys.map(k => oldExtracted.terms.get(k)!)
  const addedTerms = addedKeys.map(k => newExtracted.terms.get(k)!)

  const oldCanonical = oldDataset.toCanonical()
  const newCanonical = newDataset.toCanonical()
  const changedQuads = oldCanonical !== newCanonical

  const details: BumpDetails = {
    oldQuadsCount: oldDataset.size,
    newQuadsCount: newDataset.size,
    addedTerms,
    removedTerms,
    changedQuads,
  }

  if (oldDataset.size === 0 && newDataset.size === 0) {
    return {
      bump: 'none',
      reason: 'No quads present in dataset',
      details,
    }
  }

  if (oldDataset.size === 0 && newDataset.size > 0) {
    return {
      bump: 'minor',
      reason: `New vocabulary added with ${newDataset.size} quads and ${newExtracted.terms.size} terms`,
      details,
    }
  }

  if (oldDataset.size > 0 && newDataset.size === 0) {
    return {
      bump: 'major',
      reason: `Vocabulary emptied (all ${oldDataset.size} quads removed)`,
      details,
    }
  }

  const formatTermKey = (key: string, fullIri: string) => {
    if (prefix) return `${prefix}:${key}`
    return fullIri
  }

  if (removedKeys.length > 0) {
    const formattedRemoved = removedKeys.slice(0, 5).map(k => formatTermKey(k, oldExtracted.terms.get(k)!)).join(', ')
    const more = removedKeys.length > 5 ? ` and ${removedKeys.length - 5} more` : ''
    return {
      bump: 'major',
      reason: `Removed ${removedKeys.length} term(s) (${formattedRemoved}${more})`,
      details,
    }
  }

  // If namespace changed between non-empty datasets, it's a major breaking change
  if (oldExtracted.namespace && newExtracted.namespace && oldExtracted.namespace !== newExtracted.namespace) {
    return {
      bump: 'major',
      reason: `Namespace IRI changed from <${oldExtracted.namespace}> to <${newExtracted.namespace}>`,
      details,
    }
  }

  if (addedKeys.length > 0) {
    const formattedAdded = addedKeys.slice(0, 5).map(k => formatTermKey(k, newExtracted.terms.get(k)!)).join(', ')
    const more = addedKeys.length > 5 ? ` and ${addedKeys.length - 5} more` : ''
    return {
      bump: 'minor',
      reason: `Added ${addedKeys.length} new term(s) (${formattedAdded}${more})`,
      details,
    }
  }

  if (changedQuads) {
    return {
      bump: 'patch',
      reason: `Modified triples/annotations (${oldDataset.size} -> ${newDataset.size} quads) with no term changes`,
      details,
    }
  }

  return {
    bump: 'none',
    reason: 'No uncommitted changes in dataset quads',
    details,
  }
}

export function findUncommittedNqFiles(root = repoRoot): string[] {
  try {
    const output = execSync('git status --porcelain', { cwd: root, encoding: 'utf8' })
    const files = new Set<string>()

    for (const line of output.split('\n')) {
      if (!line.trim()) continue
      // Porcelain format: XY filename or XY orig -> filename
      const statusLine = line.slice(3).trim()
      const filename = statusLine.includes('->') ? statusLine.split('->')[1].trim() : statusLine
      const normalized = filename.replace(/^"|"$/g, '')

      if (normalized.startsWith('ontologies/') && normalized.endsWith('.nq')) {
        files.add(normalized)
      }
    }

    return [...files]
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Failed to get git status:', message)
    return []
  }
}

export async function inspectChangedVocabularies(
  root = repoRoot,
  specifiedFiles?: string[],
): Promise<VocabularyBumpInspection[]> {
  const relativeFiles = specifiedFiles && specifiedFiles.length > 0
    ? specifiedFiles.map(f => path.relative(root, path.resolve(root, f)))
    : findUncommittedNqFiles(root)

  const results: VocabularyBumpInspection[] = []

  for (const relFile of relativeFiles) {
    const fullPath = path.resolve(root, relFile)
    const ontologyDir = path.dirname(fullPath)
    const pkgJsonPath = path.join(ontologyDir, 'package.json')

    let pkgJson: { name?: string; vocabulary?: { prefix?: string; namespace?: string } } = {}
    try {
      const raw = await fs.readFile(pkgJsonPath, 'utf8')
      pkgJson = JSON.parse(raw)
    } catch {
      // Continue even if package.json cannot be read
    }

    const packageName = pkgJson.name || `@vocabulary/${path.basename(ontologyDir)}`
    const vocab = pkgJson.vocabulary || {}
    const prefix = vocab.prefix || path.basename(ontologyDir)
    const namespace = vocab.namespace || ''

    // Read current content from disk
    let newContent = ''
    try {
      newContent = await fs.readFile(fullPath, 'utf8')
    } catch {
      newContent = ''
    }

    // Read old content from git HEAD
    let oldContent = ''
    try {
      oldContent = execSync(`git show HEAD:${relFile}`, { cwd: root, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] })
    } catch {
      oldContent = ''
    }

    const bumpResult = await computeBump(oldContent, newContent, { namespace, prefix })

    results.push({
      packageName,
      prefix,
      namespace,
      filePath: fullPath,
      relativeFilePath: relFile,
      bump: bumpResult.bump,
      reason: bumpResult.reason,
      details: bumpResult.details,
    })
  }

  return results
}

export async function writeChangesets(
  inspections: VocabularyBumpInspection[],
  root = repoRoot,
): Promise<string[]> {
  const changesetDir = path.join(root, '.changeset')
  await fs.mkdir(changesetDir, { recursive: true })

  const createdFiles: string[] = []

  for (const item of inspections) {
    if (item.bump === 'none') continue

    const cleanPrefix = item.prefix.replace(/[^a-zA-Z0-9_-]/g, '_')
    const fileName = `bump-${cleanPrefix}.md`
    const filePath = path.join(changesetDir, fileName)

    const content = `---
"${item.packageName}": ${item.bump}
---

${item.reason}
`
    await fs.writeFile(filePath, content, 'utf8')
    createdFiles.push(filePath)
  }

  return createdFiles
}

async function main() {
  const args = process.argv.slice(2)
  const jsonMode = args.includes('--json')
  const dryRun = args.includes('--dry-run') || args.includes('--no-changeset')
  const specificFiles = args.filter(a => !a.startsWith('--'))

  const inspections = await inspectChangedVocabularies(repoRoot, specificFiles.length > 0 ? specificFiles : undefined)

  if (jsonMode) {
    console.log(JSON.stringify(inspections, null, 2))
    return
  }

  if (inspections.length === 0) {
    console.log('No uncommitted changes found in ontology .nq files.')
    return
  }

  console.log(`\nInspected ${inspections.length} ontology dataset file(s) with uncommitted changes:\n`)

  for (const item of inspections) {
    const bumpEmoji = item.bump === 'major' ? '🚨 MAJOR' : item.bump === 'minor' ? '✨ MINOR' : item.bump === 'patch' ? '🩹 PATCH' : '⚪ NONE'
    console.log(`Package: ${item.packageName} (${item.relativeFilePath})`)
    console.log(`  Suggested Bump : ${bumpEmoji}`)
    console.log(`  Reason         : ${item.reason}`)
    console.log(`  Quads          : ${item.details.oldQuadsCount} -> ${item.details.newQuadsCount}`)
    if (item.details.addedTerms.length > 0) {
      console.log(`  Added Terms    : ${item.details.addedTerms.length}`)
    }
    if (item.details.removedTerms.length > 0) {
      console.log(`  Removed Terms  : ${item.details.removedTerms.length}`)
    }
    console.log('')
  }

  if (!dryRun) {
    const created = await writeChangesets(inspections, repoRoot)
    if (created.length > 0) {
      console.log(`Created ${created.length} changeset file(s) (unstaged):`)
      for (const file of created) {
        console.log(`  - ${path.relative(repoRoot, file)}`)
      }
    } else {
      console.log('No changeset files needed (no version bumps detected).')
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error('Error selecting version bumps:', err)
    process.exit(1)
  })
}
