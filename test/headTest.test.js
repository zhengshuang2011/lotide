const { head } = require("../index");
const assert = require("chai").assert;

// TEST CODE
describe("#head", () => {
  it("should return 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return 6 for [6]", () => {
    assert.strictEqual(head([6]), 6);
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});
