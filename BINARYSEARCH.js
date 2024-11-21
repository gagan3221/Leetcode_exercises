//Binary search
//Time Complexities
//Best Case : O(1)
//Average Case : O(logn)
//Worst Case : O(logn)

function BinarySearch(arr , x){
    let low = 0 ;
    let mid ;
    let high = arr.length -1;
    while(high >= low){
        mid = low + Math.floor((high-low)/2)
        if(arr[mid] == x){
            return mid
        }
        if(x < arr[mid]){
            high = mid -1
            
        }else{
            low = mid + 1
        }
    }
    return -1;
}

let result = BinarySearch([3,6,7,9,11],9);
if(result === -1){
    console.log("Number Not found");
}else{
    console.log("Number found at index:" , result)
}