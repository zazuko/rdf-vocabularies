import { promises as fs } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { expect } from 'chai'
import { computeBump, writeChangesets, type VocabularyBumpInspection } from '../scripts/generate-changesets.ts'

describe('generate-changesets', () => {
  const ns = 'http://example.org/vocab#'

  it('detects major bump when terms are removed', async () => {
    const oldNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
<http://example.org/vocab#TermB> <http://www.w3.org/2000/01/rdf-schema#label> "Term B" <http://example.org/vocab#> .
`
    const newNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const result = await computeBump(oldNq, newNq, { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('major')
    expect(result.reason).to.include('Removed 1 term(s)')
    expect(result.details.removedTerms).to.deep.equal(['http://example.org/vocab#TermB'])
  })

  it('detects minor bump when new terms are added', async () => {
    const oldNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const newNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
<http://example.org/vocab#TermB> <http://www.w3.org/2000/01/rdf-schema#label> "Term B" <http://example.org/vocab#> .
`
    const result = await computeBump(oldNq, newNq, { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('minor')
    expect(result.reason).to.include('Added 1 new term(s)')
    expect(result.details.addedTerms).to.deep.equal(['http://example.org/vocab#TermB'])
  })

  it('detects patch bump when triples are modified on existing terms without term additions or removals', async () => {
    const oldNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const newNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A Updated" <http://example.org/vocab#> .
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#comment> "Description" <http://example.org/vocab#> .
`
    const result = await computeBump(oldNq, newNq, { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('patch')
    expect(result.reason).to.include('Modified triples/annotations')
    expect(result.details.addedTerms).to.be.empty
    expect(result.details.removedTerms).to.be.empty
    expect(result.details.changedQuads).to.be.true
  })

  it('returns none when content is unchanged', async () => {
    const nq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const result = await computeBump(nq, nq, { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('none')
    expect(result.details.changedQuads).to.be.false
  })

  it('detects minor bump for brand new vocabulary', async () => {
    const newNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const result = await computeBump('', newNq, { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('minor')
    expect(result.reason).to.include('New vocabulary added')
  })

  it('detects major bump for emptied vocabulary', async () => {
    const oldNq = `
<http://example.org/vocab#TermA> <http://www.w3.org/2000/01/rdf-schema#label> "Term A" <http://example.org/vocab#> .
`
    const result = await computeBump(oldNq, '', { namespace: ns, prefix: 'ex' })
    expect(result.bump).to.equal('major')
    expect(result.reason).to.include('Vocabulary emptied')
  })

  it('correctly compares terms across namespace migration without marking preserved terms as removed', async () => {
    const oldNq = `
<http://www.w3.org/ns/dpv#AcademicResearch> <http://www.w3.org/2000/01/rdf-schema#label> "Academic Research" <http://www.w3.org/ns/dpv#> .
<http://www.w3.org/ns/dpv#Accent> <http://www.w3.org/2000/01/rdf-schema#label> "Accent" <http://www.w3.org/ns/dpv#> .
`
    const newNq = `
<https://w3id.org/dpv#AcademicResearch> <http://www.w3.org/2000/01/rdf-schema#label> "Academic Research" <https://w3id.org/dpv#> .
<https://w3id.org/dpv#NewConcept> <http://www.w3.org/2000/01/rdf-schema#label> "New Concept" <https://w3id.org/dpv#> .
`
    const result = await computeBump(oldNq, newNq, { namespace: 'http://www.w3.org/ns/dpv#', prefix: 'dpv' })
    expect(result.bump).to.equal('major')
    expect(result.reason).to.include('Removed 1 term(s) (dpv:Accent)')
    expect(result.reason).to.not.include('dpv:AcademicResearch')
    expect(result.details.removedTerms).to.deep.equal(['http://www.w3.org/ns/dpv#Accent'])
    expect(result.details.addedTerms).to.deep.equal(['https://w3id.org/dpv#NewConcept'])
  })

  it('writes changeset files correctly', async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'changeset-test-'))
    try {
      const inspections: VocabularyBumpInspection[] = [
        {
          packageName: '@vocabulary/test',
          prefix: 'test',
          namespace: 'http://example.org/test#',
          filePath: '/fake/path/test.nq',
          relativeFilePath: 'ontologies/test/test.nq',
          bump: 'minor',
          reason: 'Added 2 new term(s) (test:Term1, test:Term2)',
          details: {
            oldQuadsCount: 5,
            newQuadsCount: 10,
            addedTerms: ['http://example.org/test#Term1', 'http://example.org/test#Term2'],
            removedTerms: [],
            changedQuads: true,
          },
        },
      ]

      const created = await writeChangesets(inspections, tempDir)
      expect(created).to.have.length(1)

      const fileContent = await fs.readFile(created[0], 'utf8')
      expect(fileContent).to.include('"@vocabulary/test": minor')
      expect(fileContent).to.include('Added 2 new term(s)')
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true })
    }
  })
})
