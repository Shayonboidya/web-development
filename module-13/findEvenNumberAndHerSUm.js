let nums = [1, 2, 3, 4, 5, 6, 2, 9, 3];


function findEvenNUmber(nums) {
    let evenNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenNumbers.push(nums[[i]]);
        }
    }
    return evenNumbers;
}

function findEvenNUmberSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            sum += nums[i];
        }
    }
    return sum;
}



console.log(findEvenNUmber(nums));
console.log(findEvenNUmberSum(nums));