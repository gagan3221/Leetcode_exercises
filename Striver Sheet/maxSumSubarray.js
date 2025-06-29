class Solution {
  maxSubArray(nums) {
    if (nums.length === 0) {
      return 0;
    }
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
}

const solution = new Solution();
console.log(solution.maxSubArray([2, 3, 5, -2, 7, -4]));
