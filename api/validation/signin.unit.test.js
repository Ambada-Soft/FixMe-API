const signinValidation = require("./signup");

describe("check signup validation", () => {
  it("isValid should be true sending good data", () => {
    const data1 = {
      email: "test@gmail.com",
      password: "123445678"
    };
    const data2 = {
      email: "email@test.com",
      password: "bleble12334"
    };

    expect(signinValidation(data1).isValid).toBe(true);
    expect(signinValidation(data2).isValid).toBe(true);
  });

  it("isValid should be false sending wrong data and should have details", () => {
    const data1 = { password: "123445678" };
    const data2 = { email: "email@test.com" };
    const data3 = { email: "test@gmail.com", password: "123445678" };
    const data4 = {
      email: "test",
      password: "123445678"
    };
    const data5 = {
      email: "test@test.com",
      password: "1234"
    };

    // Check isValid
    expect(signinValidation(data1).isValid).toBe(false);
    expect(signinValidation(data2).isValid).toBe(false);
    expect(signinValidation(data3).isValid).toBe(true);
    expect(signinValidation(data4).isValid).toBe(false);
    expect(signinValidation(data5).isValid).toBe(false);

    // Check details
    expect(signinValidation(data1).errors.email).toBeDefined();
    expect(signinValidation(data2).errors.password).toBeDefined();
    expect(signinValidation(data4).errors.email).toBeDefined();
    expect(signinValidation(data5).errors.password).toBeDefined();
  });
});
