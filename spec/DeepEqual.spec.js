const DeepEqual = require("../src/DeepEqual.js")

describe("DeepEqual", () => {
  describe("#check()", () => {
    it("returns true when assertion is true", () => {
      const equalAssertion = new DeepEqual(1, 1)

      expect(equalAssertion.check()).toEqual(true)
    })

    it("returns false when assertion is false", () => {
      const equalAssertion = new DeepEqual(1, 2)

      expect(equalAssertion.check()).toEqual(false)
    })

    it("returns true when objects have deep equality", () => {
        const equalAssertion = new DeepEqual({name:'Gus'},{name:'Gus'})

        expect(equalAssertion.check()).toEqual(true)
    })

    it("returns true when objects don't deep equality", () => {
        const equalAssertion = new DeepEqual({name:'Gus'},{name:'Gus', quality:'poor'})

        expect(equalAssertion.check()).toEqual(false)
    })

    it("returns true when objects have deep equality and multiple players of objects", () => {
        const equalAssertion = new DeepEqual({name:'Gus', undername:{name:'Bob'}},{name:'Gus', undername:{name:'Bob'}})

        expect(equalAssertion.check()).toEqual(true)
    })
  })
})