const mult = require('../src/mult')

it('should return correct mult', () => {
    const result = mult(9, 6)
    expect(result).toBe(54)
})