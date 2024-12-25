function fibonacci(n,dp){
    if(n <= 1){
        return n;
    }
    if(dp[n] != -1){
        return dp[n];
    }
    dp[n] = fibonacci(n-1 , dp) + fibonacci(n-2 , dp);
    return dp[n];
}
function main(){
    const n = 7;
    const dp = new Array(n+1).fill(-1);
    const result = fibonacci(n,dp);
    console.log(result)
}

main();