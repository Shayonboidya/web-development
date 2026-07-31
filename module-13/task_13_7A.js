// Average of All Numbers

// Input: an array of numbers 
// Output: the average of all numbers 
// Returns: a number 

function averageOfArray(numbers) {
    let total = 0;
    for(let val of numbers){
        total += val;
    }
    return total/numbers.length;
} 


console.log(averageOfArray([2, 4, 6])); // Expected: 4 