/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// x + y = target
// y = target - x
var twoSum = function (nums, target) {
  let arr = {};
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (target - item in arr) {
      return [arr[target - item], i];
    }
    arr[nums[i]] = i;
  }
};
