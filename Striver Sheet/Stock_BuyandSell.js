class Solution {
  stockBuySell(arr, n) {
    if (arr.length < 2) return 0;

    let minPrice = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
      let profit = arr[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
      minPrice = Math.min(minPrice, arr[i]);
    }

    return maxProfit;
  }
}

const solution = new Solution();
console.log(solution.stockBuySell([10, 7, 5, 8, 11, 9], 6));
