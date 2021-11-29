const middle = require("../middle");
const { assert } = require("chai");

// TEST CODE
describe("#middle", () => {
  it("should return [2] for [1, 2, 3]", () => {
    let result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });
  it("should return [3] for [1, 2, 3,4,5]", () => {
    let result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });
  it("should return [] for [1]", () => {
    let result = middle([1]);
    assert.deepEqual(result, []);
  });
  it("should return [] for []", () => {
    let result = middle([]);
    assert.deepEqual(result, []);
  });
  it("should return [] for [1,2]", () => {
    let result = middle([1, 2]);
    assert.deepEqual(result, []);
  });
  it("should return [2,3] for [1,2,3,4]", () => {
    let result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });
  it("should return [3,4] for [1,2,3,4,5,6]", () => {
    let result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });
});
