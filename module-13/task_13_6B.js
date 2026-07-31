//  Count Multiples of Three

//  Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number

function countMultiplesOfThree(numbers) {
    let count = 0;
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 3 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3
