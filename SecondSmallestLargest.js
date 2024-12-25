function SecondMinMax(arr){
    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        small = Math.min(small , arr[i]);
        large = Math.max(large , arr[i]);
    }
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] < second_small &&  arr[i] != small){
            second_small = arr[i];
        }
        if(arr[i] > second_large && arr[i] != large){
            second_large = arr[i];
        }
    }
    console.log("Smallest:" , small);
    console.log("Second smallest:",second_small);
    console.log("Largest:" , large);
    console.log("Second largest:",second_large);

}

SecondMinMax([3,4,5,6,7,89,77]);