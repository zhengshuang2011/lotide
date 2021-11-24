const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = (arr) => {
  let output = [];
  for (let data of arr) {
    if (!Array.isArray(data)) {
      output.push(data);
    } else {
      for (let element of data) {
        output.push(element);
      }
    }
  }
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
let result = flatten([1, 3, [4, 5], ["great", "hello"]]);
assertArraysEqual(result, [1, 3, 4, 5, "great", "hello"]);
