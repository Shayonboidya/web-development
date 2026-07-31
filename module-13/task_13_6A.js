// Find the Second Smallest Number


// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number < smallest) {
            secondSmallest = smallest;
            smallest = number;
        } else if (number > smallest && number < secondSmallest) {
            secondSmallest = number;
        }
    }

    return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
