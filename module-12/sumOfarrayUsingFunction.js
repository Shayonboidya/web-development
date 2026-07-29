// function for array
function sumOfNumbers(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}


let numbes = [1, 2, 3, 4, 5, 6, 3, 5];
console.log("Sum of arrays is : ", sumOfNumbers(numbes));