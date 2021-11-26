const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (obj, condition) => {
  let keyArr = Object.keys(obj);
  for (let item of keyArr) {
    if (condition(obj[item])) {
      return item;
    }
  }
  return undefined;
};

let result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 6
); // => "noma"

assertEqual(result, undefined);
