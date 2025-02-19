// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let n = nums.length;
    let count0 = 0;
    let i = 0;
    let left = 0;
    for(i = 0 ; i < n ; i++){
        if(nums[i] === 0){
            count0++;
        }
        if(count0 > 1){
            if(nums[left++] === 0){
                count0--;
            }
        }
    }   
    return i - left - 1; 
};