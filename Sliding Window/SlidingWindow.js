const arr = [1, 2, 6, 2, 4, 1];
const k = 3;
const n = arr.length;
console.log("Output :", maxSum(arr, k, n));

function maxSum(arr, k, n) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }

  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
