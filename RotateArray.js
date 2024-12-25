//Time Complexity - O(N)
//Space Complexity - O(N)

function RotateArray(arr){
    let temp = new Array;
    for(let i = 1 ; i < arr.length ; i++){
        temp[i-1] = arr[i];
    }
    temp[arr.length -1] = arr[0];
    console.log("The rotated array is:");
    for(let i = 0 ; i < temp.length ; i++){
        console.log(temp[i]);
    }
}

RotateArray([1,2,3,4,5,6])