const arr = [1, 2, 6, 2, 4, 1];
const k = 3;
const n = arr.length;
console.log("Output :", maxSum(arr, k, n));

function maxSum(arr, k, n) {
  let max_sum = -Infinity;
  for (let i = 0; i < n - k + 1; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    max_sum = Math.max(max_sum, currentSum);
  }
  return max_sum;
}
