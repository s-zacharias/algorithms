// 66. Plus One
// Given a non-empty array of decimal digits representing a non-negative integer,
// increment one to the integer.

// The digits are stored such that the most significant digit is at the head of
// the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number
// 0 itself.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

const plusOne = function (digits) {
  // loop through the array starting with the last index
  for (let i = digits.length - 1; i >= 0; i--) {
    // increment the index by 1
    digits[i]++;
    // if the index gets incremented to 10
    if (digits[i] > 9) {
      // mark that index as 0 and continue looping through the
      // array and incrementing indexes looking out for values above 9
      digits[i] = 0;
    } else {
      // if the index gets incremented to a value below 10, return digits
      return digits;
    }
  }
  // if the entire array gets incremented (filled with 0s), add a 1 to the front
  digits.unshift(1);
  return digits;
};

console.log('plusOne([8, 9, 9, 9])', plusOne([8, 9, 9, 9]));
console.log('plusOne([9])', plusOne([9]));
console.log('plusOne([9, 9, 9])', plusOne([9, 9, 9]));
console.log('plusOne([1, 4, 6, 8])', plusOne([1, 4, 6, 8]));
console.log('plusOne([6, 9])', plusOne([6, 9]));
