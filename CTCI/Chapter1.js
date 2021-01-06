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
