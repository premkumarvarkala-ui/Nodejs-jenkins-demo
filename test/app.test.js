const { add, subtract, multiply } = require('../src/app');

test('Addition test', () => {
    expect(add(10, 20)).toBe(30);
});

test('Subtraction test', () => {
    expect(subtract(20, 10)).toBe(10);
});

test('Multiplication test', () => {
    expect(multiply(5, 5)).toBe(25);
});