/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums[0]
    let count = 0;
    for(let i of nums){
        if(count === 0) n = i
        count += i === n ? 1 : -1;

    }
    return n;
    
};