function SortedArray(arr){
    for (let i = 1 ; i < arr.length ; i++){
        if(arr[i]< arr[i-1]){
            return false
        }
    }
    return true;

}


const arr1  = [1,2,3,4,5,6,7,8];
const arr2 = [6,8,9,12,15,66];
const arr3 = [9,4,7,6,42,1];

const ans1 = SortedArray(arr1)
const ans2 = SortedArray(arr2)
const ans3 = SortedArray(arr3)

if(ans1){
    console.log("true")
}else{
    console.log("false")
}
if(ans2){
    console.log("true")
}else{
    console.log("false")
}
if(ans3){
    console.log("true")
}else{
    console.log("false")
}