import { expect } from 'chai'
import meta from '../meta.js'

describe('@zazuko/vocabularies/meta', () => {
  it('loads meta', async () => {
    // when
    const dataset = await meta()

    // then
    expect(dataset.size).to.be.greaterThan(0)
  })
})
