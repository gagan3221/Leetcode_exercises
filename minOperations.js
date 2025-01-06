/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let distances = new Array(boxes.length).fill(0);
    let prefixCount = 0 , prefixSum = 0;
    for(let i = 0 ; i < boxes.length ; i++){
        distances[i] += prefixSum;
        prefixCount += boxes[i] === '1' ? 1 : 0;
        prefixSum += prefixCount;
    }
    let suffixCount = 0 , suffixSum = 0;
    for(let i = boxes.length -1 ; i >= 0 ; i--){
        distances[i] += suffixSum;
        suffixCount += boxes[i] === '1' ? 1 : 0;
        suffixSum += suffixCount;
    }
    return distances;
    
};