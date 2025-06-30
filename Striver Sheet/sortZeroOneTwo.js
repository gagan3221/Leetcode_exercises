class Solution {
  sortZeroOneTwo(nums) {
    nums.sort((a, b) => {
      return a - b;
    });
    return nums;
  }
}

const solution = new Solution();

console.log(solution.sortZeroOneTwo([1, 0, 2, 1, 0]));
