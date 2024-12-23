//Largest element using Brute Force - sorting
function Maxele(arr){
    arr.sort((a,b) => b-a)
    return arr[0]
}

const arr1= [1,3,5,4,6,2];
const arr2 = [3,2,6,9,10,99];

console.log(Maxele(arr1))
console.log(Maxele(arr2))