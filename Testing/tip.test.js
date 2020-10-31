const { calculateTip } = require('./tip')

// Using conditions
test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    if (total !== 13) {
        throw new Error('Total tip should be 13. But got ', total)
    }
})

// Using expect
test('Should calculate total with tip', () => {
    const total = calculateTip(10, .5)
    expect(total).toBe(15)
})
test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})



