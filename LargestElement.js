function LargestElement(arr){
    let max = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const arr1 = [8,6,1,0,9,66,77]
const arr2 = [99,666,999,1000,888];

console.log(LargestElement(arr1));
console.log(LargestElement(arr2))