//Selection sort
//Time Complexity - O(n^2)
//Space Complexity - O(1)


const SelectionSort = (arr) => {
    let n = arr.length;
    if(n<=1){
        return arr;
    }
    for(let i = 0 ; i<n-1 ; i++){
        let minIndex = i;
        for(let j = i+1 ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]]
        }
    }
    return arr;
}

console.log(SelectionSort([7,4,1,5,2,9]))