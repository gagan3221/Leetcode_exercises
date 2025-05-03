//Only works if the array is sorted
var twoSum = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  nums = nums.sort((a, b) => a - b);
  while (start < end) {
    if (nums[start] + nums[end] === target) {
      return [start, end];
    }
    if (nums[start] + nums[end] < target) {
      start++;
    } else {
      end--;
    }
  }
};
