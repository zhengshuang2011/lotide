const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function (arr) {
  let newArr = [...arr];
  if (newArr.length === 0 || newArr.length === 1) {
    return [];
  } else {
    newArr.shift();
  }
  return newArr;
};

// TEST CODE
console.log(tail([5, 6, 7]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([]));
console.log(tail([6]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const result = tail([5, 6, 7]);
assertEqual(result[0], 6);
assertEqual(result[1], 7);
const result1 = tail([]);
assertEqual(result1.length, 0);
const result2 = tail([6]);
assertEqual(result2.length, 0);
