// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let i = 0, sum = 0 , minLength = Infinity;
    for(let j = 0 ; j < n ; j++){
        sum += nums[j]
        while(sum >= target){
            minLength = Math.min(minLength , j - i + 1);
            sum -= nums[i];
            i++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};