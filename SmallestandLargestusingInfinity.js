function MixMax(arr){
    let small = Infinity;
    let large = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        small = Math.min(small , arr[i]);
        large = Math.max(large , arr[i]);
    }
    return {small , large}
}

const ans = MixMax([8,3,5,2,1,6]);
console.log("Minimum is" , ans.small)
console.log("Maximum is" , ans.large)