const fn = require('./fn');

test('1 is 1', () => {
    expect(1).toBe(1);
});

test('2 add 5 is 7', () => {
    expect(fn.add(2, 5)).toBe(7);
});
test('2 add 3 is not 7', () => {
    expect(fn.add(2, 3)).not.toBe(7);
});