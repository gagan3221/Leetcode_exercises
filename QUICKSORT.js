//Divide and conqueror method
// Time complexities 
// AVERAGE CASE - O(nlogn)
// BEST CASE - O(nlogn)
// WORST CASE - O(n^2)

function quickSort(arr){
    //Solving for edge case
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        } 
    }
    return [...quickSort(left), pivot , ...quickSort(right)]
    

}
console.log(quickSort([5,9,1,4,2,7]))