const { tail } = require("../index");
const assert = require("chai").assert;

// TEST CODE
describe("#tail", () => {
  it("should return 6 for [5,6,7]'s first element, and return 7 for [5,6,7]'s second element", () => {
    let result = tail([5, 6, 7]);
    assert.equal(result[0], 6);
    assert.equal(result[1], 7);
  });
  it("should return 0 for [0]'s length", () => {
    let result = tail([]);
    assert.equal(result.length, 0);
  });
  it("should return 0 for [6]'s length", () => {
    let result = tail([6]);
    assert.equal(result.length, 0);
  });
  it("should return 3 for  ['Yo Yo', 'Lighthouse', 'Labs']'s original length", () => {
    let array = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(array.length, 3);
  });
});
