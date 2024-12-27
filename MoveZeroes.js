function MoveZeroes(arr) {
  let temp = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log("The array formed is :");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

MoveZeroes([0,0,1,3,5,0,2,1,4,0]);
