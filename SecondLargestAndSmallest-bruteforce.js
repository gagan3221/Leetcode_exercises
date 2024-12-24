//Sorting the elements of array in ascending order first then finding the second smallest and second largest

function SecondLarSma(arr) {
  arr.sort((a, b) => a - b);
  const small = arr[1];
  const large = arr[arr.length - 2];
  console.log("Second smallest  element :" , small )
  console.log("Second largest  element :" , large)
}

SecondLarSma([4,2,1,5,7,99])
SecondLarSma([4,7,9,22,55,33])
