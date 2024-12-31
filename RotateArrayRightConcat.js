function RotateArrayRight(arr , k){
    let temp1 = new Array();
    let temp2 = new Array();
    for(let i = 0 ; i < arr.length - k ; i++){
        temp1.push(arr[i]);
    }
    for(let i = arr.length - k ; i < arr.length ; i++){
        temp2.push(arr[i])
    }
    let final = temp2.concat(temp1)
    for(let i = 0 ; i < final.length ; i++){
        console.log(final[i])
    }
   

}

RotateArrayRight([1,2,3,4,5,6,7] , 2);