const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('./math')

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

// Test Challenge 
test('Should convert 32°F to 0°C', () => {
    const celsius = fahrenheitToCelsius(32)
    expect(celsius).toBe(0)
})
test('Should convert 0°C to 32°F', () => {
    const fahrenheit = celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})

// Asynchronous testing
test('Async test demo', (done) => {
    setTimeout(() => {
        expect(2).toBe(2)
        done()
    }, 2000);
})
