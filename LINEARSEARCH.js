//Time Complexity - O(N)
//Space Complexity - O(1)

function LinearSearch(arr , n){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === n){
            console.log("Number found at index :" , i)
        }
    }
    console.log("Successfully traveresed the array");

}

LinearSearch([5,8,4,3,2,1,5] , 5);