/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let ans = 0;
        const n = s.length;

        const map = new Map();

        // Record the first and last occurrence of each character
        for (let i = 0; i < n; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], [i, i]);
            } else {
                const positions = map.get(s[i]);
                positions[1] = i;
                map.set(s[i], positions);
            }
        }

        // Iterate through each character's first and last occurrence
        for (const [ch, positions] of map.entries()) {
            const [left, right] = positions;

            if (right - left <= 1) continue; // No valid subsequences in this range

            const uniqueChars = new Set();
            for (let i = left + 1; i < right; i++) {
                uniqueChars.add(s[i]);
            }

            ans += uniqueChars.size; // Count unique characters between first and last occurrence
        }

        return ans;
    
};