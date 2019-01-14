// Importing this way is not valid
// import { defaults } from "./defaults";

const { defaults } = require("./defaults");

describe("Check if constants exists", () => {
  it("appPort must be defined", () => {
    expect(defaults.appPort).toBeDefined();
    expect(defaults.appPort).toBeTruthy();
  });
});
