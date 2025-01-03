/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0, zerosCount = 0, onesCount = 0, bestScore = -Infinity;
    for(const char of s){
        if(char === '1'){
            totalOnes++;
        }
    }
    for(let i = 0 ; i < s.length -1   ; i++){
        if(s[i] === '0'){
            zerosCount++;
        }else{
            onesCount++;
        }
        const currentScore = zerosCount + (totalOnes - onesCount );
        bestScore = Math.max(currentScore , bestScore);
    }
    return bestScore
    
};