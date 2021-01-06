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
