/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let digits = Array.from(String(num), Number); // Convert the number to an array of digits
    let lastIndex = Array(10).fill(-1); // Keep track of the last occurrence of each digit (0-9)

    // Store the last occurrence of each digit
    for (let i = 0; i < digits.length; i++) {
        lastIndex[digits[i]] = i;
    }

    // Try to swap the first smaller digit with the largest possible digit after it
    for (let i = 0; i < digits.length; i++) {
        // Check for a larger digit in the later part of the array
        for (let d = 9; d > digits[i]; d--) {
            if (lastIndex[d] > i) {
                // Swap the digits
                [digits[i], digits[lastIndex[d]]] = [digits[lastIndex[d]], digits[i]];
                return parseInt(digits.join(''), 10); // Return the result after swapping
            }
        }
    }

    // If no swap was made, return the original number
    return num;
};
