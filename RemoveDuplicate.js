function RemoveDuplicate(arr){
    let set = new Set(arr);
    let newArr = Array.from(set);
    arr.length = newArr.length;
    for(let i = 0 ; i < newArr.length ; i++){
        arr[i] = newArr[i]
    } 

    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
    }
}

RemoveDuplicate([1,1,2,2,3,3,4,5,5])