const { sum, subtraction, multiplication, division } = require("../src/math");

describe("sum module", () => {
  test("sum should be correct", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("subtraction module", () => {
  test("subtraction should be correct", () => {
    expect(subtraction(3, 2)).toBe(1);
  });
});

describe("multiplication module", () => {
  test("multiplication should be correct", () => {
    expect(multiplication(4, 2)).toBe(8);
  });
});

describe("division module", () => {
  test("division should be correct", () => {
    expect(division(8, 4)).toBe(2);
  });
});
