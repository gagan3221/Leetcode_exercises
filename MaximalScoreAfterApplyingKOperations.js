/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const pq = new MaxPriorityQueue({ compare: (a, b) => b - a })
  for (const num of nums) {
    pq.enqueue(num)
  }
  let score = 0
  while (k) {
    const ele = pq.dequeue()
    score += ele
    pq.enqueue(Math.ceil(ele / 3))
    k--
  }
  return score
    
};




/*You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

In one operation:

choose an index i such that 0 <= i < nums.length,
increase your score by nums[i], and
replace nums[i] with ceil(nums[i] / 3).
Return the maximum possible score you can attain after applying exactly k operations.

The ceiling function ceil(val) is the least integer greater than or equal to val. */