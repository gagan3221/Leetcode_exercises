/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1){
        return 1
    }
    let dp = new Array(n+1).fill(-1);
    return climbStairsHelper(n , dp);
};

function climbStairsHelper(n , dp){
    if(n <= 1){
        return 1
    }
    if(dp[n] !== -1){
        return dp[n]
    }
    dp[n] = climbStairsHelper(n - 1, dp) + climbStairsHelper(n - 2, dp);
    return dp[n]
}
