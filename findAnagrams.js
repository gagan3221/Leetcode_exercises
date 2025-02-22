// Given two strings s and p, return an array of all the start indices of p's 
// anagrams
//  in s. You may return the answer in any order.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //result array which will store indexes
    let res = [];
    //neededChars object
    let neededChars = {};
    //insert key value pairs in this object as chars and their count as frequency
    for(let char of p){
        if(char in neededChars){
            neededChars[char]++;
        }else neededChars[char] = 1;
    }
    //sliding window problem (left = 0 , right = 0)
    let i = 0 , j = 0;
    //length of txt
    let sLen = s.length;
    //length of pattern
    let pLen = p.length
    //traverse right till length of txt
    while(j < sLen){
        if (neededChars[s[j]] > 0) pLen--;
        neededChars[s[j]]--;
        j++;

        if(pLen === 0) res.push(i);

        if(j - i == p.length){
            if(neededChars[s[i]] >= 0) pLen++;
            neededChars[s[i]]++;
            i++;
        }

    }
    return res;    
};