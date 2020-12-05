define(['my/answer'], answer => {
  describe('my answer', () => {
    it('is ultimate', () => {
      if (typeof jasmine !== 'undefined')
        expect(answer()).toEqual(42)
      else if (typeof expect !== 'undefined')
        expect(answer()).to.equal(42)
      else if (typeof assert !== 'undefined')
        assert.equal(answer(), 42)
      else
        answer().should.equal(42)
    })
  })
})
