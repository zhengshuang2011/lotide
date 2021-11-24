const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  str = str.replace(/ /g, "");
  console.log(str);
  let result = {};
  for (const letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["n"], 1);
assertEqual(result1[" "], undefined);
