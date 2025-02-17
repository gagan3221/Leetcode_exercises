// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"




/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //Edge case if strings after joining are not same
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const maxLength = fc(str1.length , str2.length)
    return str1.substring(0 , maxLength);
};

function fc(a,b){
    if(b === 0){
        return a;
    }
    return fc(b , a % b);
}