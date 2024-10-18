/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     // Step 1: Define vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Step 2: Convert the string into an array to modify it easily
    let chars = s.split('');
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        while(left < right && !vowels.has(chars[left])){
            left ++;
        }
        while(left < right && !vowels.has(chars[right])){
            right --;
        }
        if(left < right){
            [chars[left] , chars[right]] = [chars[right] , chars[left]];
            left ++ ;
            right --;
        }
    }
    return chars.join('')
    
    
};