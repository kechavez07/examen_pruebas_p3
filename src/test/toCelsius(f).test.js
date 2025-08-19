const celsius = require('../utils/toCelsius(f)');

describe('celsius', () => {
    test ('32°F → 0.0°C ', () => {
    expect(celsius(32)).toBe(0.0);
    });
    test ('-40°F → -40.0°C ', () => {  
    expect(celsius(-40)).toBe(-40.0);
    });
});