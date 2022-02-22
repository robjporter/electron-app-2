import { celsiusToFahrenheit, fahrenheitToCelsius } from './conversion';

test('celsiusToFahrenheit: Convert celsius to fahrenheit - 10', () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
})

test('fahrenheitToCelsius: Convert fahrenheit to celsius- 50', () => {
    expect(fahrenheitToCelsius(50)).toBe(10);
})