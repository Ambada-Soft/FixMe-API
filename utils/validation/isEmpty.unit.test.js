const isEmpty = require("./isEmpty");

describe("check isEmpty", () => {
  it("should return true is value is {}, [], '', null", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("    ")).toBe(true);
    expect(isEmpty(null)).toBe(true);
  });

  it("should return false is value is not {}, [], '', null", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty("Hello")).toBe(false);
  });
});
