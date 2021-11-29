const tail = function (arr) {
  let newArr = [...arr];
  if (newArr.length === 0 || newArr.length === 1) {
    return [];
  } else {
    newArr.shift();
  }
  return newArr;
};

module.exports = tail;
