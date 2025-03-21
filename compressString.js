// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0
    let write = 0
    while(read < chars.length){
        let char = chars[read];
        let count = 0;
        while(read < chars.length && chars[read]===char){
            read++;
            count++;
        }
        chars[write++] = char;
        if(count>1){
            const countStr = count.toString();
            for(let digit of countStr){
                chars[write++] = digit
            }
        }
    }
    return write;
    
}