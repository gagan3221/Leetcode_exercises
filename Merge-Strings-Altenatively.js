/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = '';
    let i = 0 , j = 0;
    while(word1.length > i || word2.length>j){
        if(word1.length > i ){
            merged += word1[i]
            i++
        }
        if(word2.length > j ){
            merged += word2[j]
            j++
        }
    }
    return merged
};