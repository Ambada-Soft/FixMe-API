const request = require("supertest");
const app = require("./server");

describe("Hello endpoint", () => {
  it("hello to user", () => {
    request(app)
      .get("/hello")
      .expect(200)
      .expect(/hello/);
  });
});
