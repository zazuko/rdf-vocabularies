import { describe, it, before, after } from 'mocha'
import { expect } from 'chai'
import { vocabularies } from '../vocabularies.mjs'

describe('@zazuko/rdf-vocabularies/vocabularies', function () {
  this.timeout(10000)

  describe('vocabularies', () => {
    it('loads in node ESM', async () => {
      const { acl } = await vocabularies({ only: ['acl'] })

      expect(acl).to.be.ok
    })
  })
})
