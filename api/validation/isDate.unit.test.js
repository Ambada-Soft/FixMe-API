const isDate = require("./isDate");

describe("check isDate", () => {
  it("should return true is value is a valid date", () => {
    expect(isDate("1996-08-18")).toBe(true);
    expect(isDate("2019-01-22")).toBe(true);
    expect(isDate("2019-12-22")).toBe(true);
  });

  it("should return false is value is not a valid date", () => {
    expect(isDate("asdf")).toBeFalsy();
    expect(isDate({})).toBeFalsy();
    expect(isDate("0000-00-00")).toBeFalsy();
    expect(isDate("2019-13-12")).toBeFalsy();
    expect(isDate("2019-3-12")).toBeFalsy();
    expect(isDate("12-13-2019")).toBeFalsy();
  });
});
