/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let leftSideSum = 0 , rightSideSum = 0 , splits = 0;
    for (let i = 0 ; i < nums.length ; i++){
        rightSideSum += nums[i];
    }
    for(let i = 0 ; i < nums.length -1  ; i++){
        leftSideSum += nums[i];
        rightSideSum -= nums[i];
        if(leftSideSum >= rightSideSum){
            splits++;
        }
    }
    return splits;
    
};