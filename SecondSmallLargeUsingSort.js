//Sorting the array in ascending order 
function SecondMinMax(arr){
    arr.sort((a,b) => a - b);
    const second_small = arr[1];
    const second_large = arr[arr.length -2];
    console.log("Second Smallest :" , second_small);
    console.log("Second Largest :" , second_large);

}

SecondMinMax([3,4,5,6,1,88,66]);