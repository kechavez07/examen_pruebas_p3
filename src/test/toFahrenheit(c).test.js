const fahrenheit = require('../utils/toFahrenheit(c)');

describe('fahrenheit', () => {
    test ('0°C → 32.0°F ', () => {
        expect(fahrenheit(0)).toBe(32.0);
    });
    test ('100°C → 212.0°F ', () => {
        expect(fahrenheit(100)).toBe(88.0);
    });
    test ('-40°C → -40.0°F ', () => {  
        expect(fahrenheit(-40)).toBe(10.0);
    });
});