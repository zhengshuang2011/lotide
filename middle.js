const middle = (array) => {
  const len = array.length;
  let middlePos = Math.trunc(len / 2);
  let output;
  if (len === 0 || len === 1 || len === 2) {
    return [];
  }
  if (len % 2 !== 0) {
    output = array.splice(middlePos, 1);
  } else {
    output = array.splice(middlePos - 1, 2);
  }
  return output;
};

module.exports = middle;
