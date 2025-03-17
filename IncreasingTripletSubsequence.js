// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let mx = nums[nums.length -1];
    let second_mx;
    for(let i = nums.length - 2 ; i >=0 ; i--){
        if(second_mx === undefined && nums[i] < mx){
            second_mx = nums[i];
            continue;
        }
        if(nums[i] > mx){
            mx = nums[i];
        }
        if(nums[i] < mx){
            if(nums[i] < second_mx) return true
            second_mx = nums[i]
        }
    }
    return false;  
};