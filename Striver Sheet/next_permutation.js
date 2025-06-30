class Solution {
  nextPermutation(nums) {
    let pivot = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        pivot = i;
        break;
      }
    }

    if (pivot === -1) {
      nums.reverse();
      return nums;
    }

    let successor = -1;
    for (let i = nums.length - 1; i > pivot; i--) {
      if (nums[i] > nums[pivot]) {
        successor = i;
        break;
      }
    }
    [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]];
    let left = pivot + 1;
    let right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return nums;
  }
}

const solution = new Solution();
console.log(solution.nextPermutation([1, 3, 2]));
