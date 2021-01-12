// Arrays and Strings

// 1.1
// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

const isUnique = (input) => {
  if (typeof input !== 'string') {
    return 'Invalid input';
  }
  let seenBefore = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] in seenBefore) {
      return false;
    } else {
      seenBefore[input[i]] = true;
    }
  }
  return true;
};

console.log("isUnique('abc')", isUnique('abc'));
console.log("isUnique('aaa')", isUnique('aaa'));

// 1.2
// Check Permutation: Given two strings,write a method to decide if one is a permutation of the
// other.

const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const sortedString1 = [...string1].sort().join('');
  const sortedString2 = [...string2].sort().join('');

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
};

console.log(
  "checkPermutation('puppy', 'kitten')",
  checkPermutation('puppy', 'kitten')
);
console.log("checkPermutation('cat', 'rat')", checkPermutation('cat', 'rat'));
console.log("checkPermutation('dog', 'god')", checkPermutation('dog', 'god'));

// 1.3
// URLify: Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold
// the additional characters,and that you are given the "true" length of
// the string.

const URLify = (input, length) => {
  if (typeof input !== 'string') {
    return 'Invalid Input';
  }

  let removedTrailing;
  let URL = '';
  let extraSpace = 0;

  for (let j = input.length - 1; j >= 0; j--) {
    if (input[j] !== ' ') {
      removedTrailing = input.slice(0, j + 1);
      break;
    }
  }

  for (let i = 0; i < removedTrailing.length; i++) {
    if (removedTrailing[i] === ' ') {
      URL += '%20';
      extraSpace += 2;
    } else {
      URL += removedTrailing[i];
    }
  }

  return URL.slice(0, length + extraSpace);
};

console.log('URLify(["a b c"], 13)', URLify(['a b c'], 1));
console.log("URLify('Mr John Smith    ', 13)", URLify('Mr John Smith    ', 13));
console.log("URLify('Miss Susie ', 11)", URLify('Miss Susie ', 11));

// 1.4
// Palindrome Permutation: Given a string, write a function to check
// if it is a permutation of a palin­drome. A palindrome is a word
// or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to
// be limited to just dictionary words.

const palindromePermutation = (input) => {
  if (typeof input !== 'string') {
    return 'Invalid input';
  }

  let letterObj = {};
  let letterCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      continue; // skip spaces
    }
    if (letterObj[input[i]]) {
      delete letterObj[input[i]]; // remove value when it has appeared twice
    } else {
      letterObj[input[i]] = true;
    }
    letterCount++;
  }

  if (letterCount % 2 === 0) {
    return Object.keys(letterObj).length === 0; // if the count is even the obj should be empty
  } else {
    return Object.keys(letterObj).length === 1; // if the count is odd there can only be one item in the table
  }
};

console.log(
  "palindromePermutation('taco cat')",
  palindromePermutation('taco cat')
);
console.log(
  "palindromePermutation('anu ckd')",
  palindromePermutation('anu ckd')
);
console.log(
  "palindromePermutation('annjj  ')",
  palindromePermutation('annjj  ')
);

// 1.5
// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character. Given two
// strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (string1, string2) => {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Invalid input';
  }

  // handle the case where a letter is added or removed
  if (string1.length !== string2.length) {
    let letterObj = {};

    for (let i = 0; i < string1.length; i++) {
      letterObj[string1[i]] = true;
    }

    for (let j = 0; j < string2.length; j++) {
      if (letterObj[string2[j]]) {
        delete letterObj[string2[j]];
      } else {
        letterObj[string2[j]] = true;
      }
    }

    return (
      Object.keys(letterObj).length === 0 || Object.keys(letterObj).length === 1
    );
  } else {
    // handle the case where a letter is replaced
    let editCount = 0;

    for (let k = 0; k < string1.length; k++) {
      if (string1[k] !== string2[k]) {
        editCount++;
      }
    }

    return editCount === 0 || editCount === 1;
  }
};

console.log("oneAway('pale', 'ple')", oneAway('pale', 'ple'));
console.log("oneAway('pales', 'pale')", oneAway('pales', 'pale'));
console.log("oneAway('pale', 'bale')", oneAway('pale', 'bale'));
console.log("oneAway('pale', 'bake')", oneAway('pale', 'bake'));

// 1. 6
// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters. For example, the string aabcccccaaa would
// become a2blc5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can assume
// the string has only uppercase and lowercase letters (a - z).

const stringCompression = (input) => {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      compressed += input[i] + count;
      count = 1;
    }
  }

  if (input.length >= compressed.length) {
    return input;
  } else {
    return compressed;
  }
};

console.log(
  "stringCompression('aabcccccaaa')",
  stringCompression('aabcccccaaa')
);
console.log(
  "stringCompression('ssskkkkellln')",
  stringCompression('ssskkkkellln')
);
console.log("stringCompression('ss')", stringCompression('ss'));

// 1.7
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel
// in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can
// you do this in place?

const rotateMatrix = (matrix) => {
  // swap by the indexes using 1 temp variable
  const n = matrix.length;
  // need 2 for loops to access every element in the matrix
  for (let i = 0; i < n / 2; i++) {
    // the outer loop is bound by half of the matrix
    for (let j = i; j < n - 1 - i; j++) {
      // the inner loop is bound by the n - the number loop were on (i) - 1
      let temp = matrix[i][j]; // create a temp variable to save the top left value
      matrix[i][j] = matrix[n - 1 - j][i]; // move the bottom left to the top
      matrix[n - 1 - j][i] = matrix[n - i - 1][n - 1 - j]; // move the bottom right to the bottom left
      matrix[n - i - 1][n - 1 - j] = matrix[j][n - i - 1]; // move top right to bottom right
      matrix[j][n - i - 1] = temp; // move top left to top right
    }
  }
};

// 1.8
// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

const zeroMatrix = (matrix) => {
  // create row and column trackers to indicate where zeros are
  let rowTracker = new Array(matrix.length);
  let columnTracker = new Array(matrix[0].length);

  // loop through the matrix and mark whether or not there is a zero in the row or column
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowTracker[i] = true;
        columnTracker[j] = true;
      }
    }
  }

  // loop through the row tracker and make the matrix have zeros in those rows
  for (let i = 0; i < rowTracker.length; i++) {
    if (rowTracker[i]) {
      for (let j = 0; j < matrix[0].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // loop through the column tracker and make the matrix have zeros in those columns
  for (let i = 0; i < columnTracker.length; i++) {
    if (columnTracker[i]) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  'expected to be: [ [ 0, 0, 0, 0 ], [ 0, 1, 0, 3 ], [ 0, 0, 0, 0 ], [ 0, 1, 0, 3 ] ]\n',
  zeroMatrix([
    [0, 1, 2, 3],
    [3, 1, 2, 3],
    [9, 1, 0, 3],
    [5, 1, 2, 3],
  ])
);
