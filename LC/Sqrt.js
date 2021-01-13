// 69. Sqrt
// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,
// and only the integer part of the result is returned.

// Example 1:
// Input: x = 4
// Output: 2

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal
// part is truncated, 2 is returned.

// Constraints:

// 0 <= x <= 231 - 1

const mySqrt = (x) => {
  // if x is 0 or 1 return x
  if (x <= 1) {
    return x;
  }
  // binary search tree -> separate into right and left
  let left = 1;
  let right = x;

  while (left < right) {
    // create a mid point
    let mid = left + Math.floor((right - left) / 2);
    // check if the mid point is the square root
    if (mid ** 2 === x) {
      return mid;
    } else if (mid ** 2 > x) {
      // if mid ** 2 is bigger than x make the right = mid - 1
      right = mid;
    } else if (mid ** 2 < x) {
      // if mid ** 2 is less than x make the left = mid + 1
      left = mid + 1;
    }
  }
  // return the left value - 1 to get the truncated sqrt
  return left - 1;
};
