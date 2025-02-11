/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a,b) => a-b);
    let v =[];
    for(let i = 0 ; i < arr.length ; i++){
        let count = 1;
        while(i+1 < arr.length && arr[i] === arr[i+1]){
            count++;
            i++;
        }
        v.push(count);
    }
    v.sort((a,b) => a-b);
    for(let i = 0 ; i < v.length ; i++){
        if(v[i] === v[i+1]){
            return false;
        }
    }
    return true;
    
};