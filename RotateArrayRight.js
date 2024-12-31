function RotateArrayRight(arr , k){
    let temp1 = new Array();
    let temp2 = new Array();
    for(let i = 0 ; i < arr.length - k ; i++){
        temp1.push(arr[i]);
    }
    for(let i = arr.length - k ; i < arr.length ; i++){
        temp2.push(arr[i])
    }
    for(let i = 0 ; i < temp2.length ; i++){
        arr[i] = temp2[i]
    }
    for(let i = 0 ; i < temp1.length ; i++){
        arr[temp2.length + i] = temp1[i]

    }
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
    }

}

RotateArrayRight([1,2,3,4,5,6,7] , 2);