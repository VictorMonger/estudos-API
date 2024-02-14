const { sum, subtraction, multiplication, division } = require('../src/math');

test('sum should be correct', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtraction should be correct', () => {
  expect(subtraction(3, 2)).toBe(1);
});

test('multiplication should be correct', () => {
  expect(multiplication(4, 2)).toBe(8);
});

test('division should be correct', () => {
  expect(division(8, 4)).toBe(2);
});
