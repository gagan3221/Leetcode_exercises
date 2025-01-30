/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let arr = [[] , []];
    for(let i of set1){
        if(!set2.has(i)){
            arr[0].push(i);
        }
    }
    for(let i of set2){
        if(!set1.has(i)){
            arr[1].push(i);
        }
    }
    return arr
    
};