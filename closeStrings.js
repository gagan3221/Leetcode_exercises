/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for(ch of word1){
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(ch of word2){
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0 ; i < 26 ; i++){
        if((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)){
            return false;
        }
    }
    freq1.sort((a,b) => a-b);
    freq2.sort((a,b) => a-b);
    for(let i = 0 ; i < 26 ; i++){
        if(freq1[i] !== freq2[i]){
            return false
        }
    }
    
    return true;
    
};