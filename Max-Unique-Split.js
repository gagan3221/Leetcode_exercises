/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let res = 1;
    // Create a Set to store unique substrings
    let strings = new Set();
    function search(s){
        if(!strings.has(s)){
            strings.add(s);
            res = Math.max(res , strings.size);
            strings.delete(s);
        }
     // Iterate through all possible split positions
    for (let i = 1; i < s.length; i++) {
      // Get the substring from start to current position
      const sub = s.substring(0, i);
      // If this substring is already in the Set, skip this iteration
      if (strings.has(sub)) continue;
      // Add the substring to the Set
       strings.add(sub);
      // Recursively search the remaining part of the string
      search(s.substring(i));
      // Remove the substring from the Set (backtracking)
      strings.delete(sub);
    }
    }
    search(s);
    return res;
};