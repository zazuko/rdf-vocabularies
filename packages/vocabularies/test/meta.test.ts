import { expect } from 'chai'
import meta from '../meta.js'

describe('@zazuko/vocabularies/meta', function () {
  it('loads meta', async function () {
    // when
    const dataset = await meta()

    // then
    expect(dataset.size).to.be.greaterThan(0)
  })
})
