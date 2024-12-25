//Time Complexity - O(N)
//Space Complexity - O(1) (Only 1 array is used)

function RotateArray(arr){
    let temp = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = temp;
    console.log("The rotated array is:");
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}

RotateArray([1,2,3,4,5,6,7]);