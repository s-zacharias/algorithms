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
// if it is a permutation of a palin­ drome. A palindrome is a word
// or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to
// be limited to just dictionary words.

const palindromePermutation = (input) => {};
