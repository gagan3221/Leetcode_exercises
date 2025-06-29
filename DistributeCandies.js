/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let ways = 0;
  for (let ch1 = 0; ch1 <= Math.min(n, limit); ch1++) {
    for (let ch2 = 0; ch1 <= Math.min(n - ch1, limit); ch2++) {
      for (let ch3 = 0; ch3 <= Math.min(n - ch1 - ch2, limit); ch3++) {
        if (ch1 + ch2 + ch3 === n) {
          ways++;
        }
      }
    }
  }
  return ways;
};

let x = distributeCandies(5, 2);
console.log(x);
