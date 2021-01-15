// 283: Move Zeros
// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeros = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
};

console.log('moveZeros([0,1,0,3,12])', moveZeros([0, 1, 0, 3, 12]));
