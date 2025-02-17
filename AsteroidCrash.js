/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let res = [];
    for(let i = 0 ; i < asteroids.length ; i++){
        let curr = asteroids[i];
        let last = res[res.length -1];
        if(!res.length || last < 0 || curr > 0 ){
            res.push(curr)
        }else if(-curr == last){
            res.pop();
        }else if(-curr > last){
            res.pop();
            i--
        }
    }
    return res;
    
};