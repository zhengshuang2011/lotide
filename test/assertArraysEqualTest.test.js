const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
assertArraysEqual(["hello", 1, "3"], ["hello", 1, "3"]);
assertArraysEqual(["hello", "great", "3"], ["hello", "gret", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
