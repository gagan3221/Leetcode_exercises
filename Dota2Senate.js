/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rad = [];
    let dire = [];
    let n = senate.length;
    for(let i = 0 ; i < n ; i++){
        if(senate[i] === 'R'){
            rad.push(i+n)
        }else{
            dire.push(i+n)
        }
    }
    while(rad.length > 0 && dire.length > 0){
        if(rad[0] < dire[0]){
            rad.push(rad[0] + n)
        }
        if(dire[0] < rad[0]){
            dire.push(dire[0] + n)
        }
        dire.shift();
        rad.shift();
    }
    return (rad.length > 0) ? 'Radiant' : 'Dire';
    
};