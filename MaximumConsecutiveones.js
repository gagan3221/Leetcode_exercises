function MaxOnes(arr){
    let count = 0;
    let max_count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 1){
            count++;
        }else{
            count = 0;
        }
        max_count = Math.max(count , max_count);
    }
    console.log("Max count is:" , max_count)

}

MaxOnes([1,1,0,1,1,1]);