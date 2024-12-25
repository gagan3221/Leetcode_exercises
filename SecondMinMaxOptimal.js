//Optimal solution
//Time Complexity - O(N)
//Space Complexity - O(1)

function SecondLargest(arr){
    let large = -Infinity;
    let second_large = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > large){
            second_large = large;
            large = arr[i];
        }else if(arr[i] > second_large && arr[i] != large){
            second_large = arr[i];
        }
    }
    console.log("Largest :" , large);
    console.log("Second Largest :" , second_large);
}

function SecondSmallest(arr){
    let small = Infinity;
    let second_small = Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < small){
            second_small = small;
            small = arr[i];
        }else if(arr[i] < second_small && arr[i] != small){
            second_small = arr[i];
        }
    }
    console.log("Smallest :" , small);
    console.log("Second Smallest :" , second_small);
}

SecondLargest([3,4,5,6,8,88,66])
SecondSmallest([3,4,5,6,8,88,66])