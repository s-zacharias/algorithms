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

  let URL = '';
  let extraSpace = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      URL += '%20';
      extraSpace += 1;
    } else {
      URL += input[i];
    }
  }
  return URL.slice(0, length + extraSpace - 2);
};

console.log('URLify(["a b c"], 13)', URLify(['a b c'], 1));
console.log("URLify('Mr John Smith    ', 13)", URLify('Mr John Smith    ', 13));
console.log(
  "URLify('Miss Susie Louis Carter    ', 24)",
  URLify('Miss Susie Louis Carter    ', 24)
);
