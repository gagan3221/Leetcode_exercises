/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies[0];
    for(let i = 1 ; i < candies.length ; i++){
        if(candies[i] > max){
            max = candies[i];
        }
    }
    let list = new Array();
    for(let i = 0 ; i < candies.length ; i++){
        let ans = false;
        if(candies[i]+extraCandies >= max){
            ans = true;
            list.push(ans);
        }else{
            list.push(ans)
        }
    }
    return list;
    
};