// ============================================
// Spread Operator (...)
// ============================================

// Create an array.
let number = [12, 20, 39, 40, 60];

// Array:
// [12, 20, 39, 40, 60]

// Spread operator (...) separates every element
// of the array into individual values.
//
// console.log(...number);
//
// Output:
// 12 20 39 40 60


// ============================================
// Using Spread Operator with Math.max()
// ============================================

// Math.max() expects individual numbers, NOT an array.
//
// Wrong:
// Math.max(number)
//
// Correct:
// Spread the array into individual values.
let maxNumber = Math.max(...number);

// Output:
// 60

// console.log(maxNumber);


// ============================================
// Copying Arrays
// ============================================

// -------------------------------
// Method 1 (Reference Copy)
// -------------------------------

// let numbers2 = number;
//
// Both variables point to the SAME array in memory.
//
// number.push(28888);
//
// Since both variables reference the same array,
// numbers2 will also contain 28888.
//
// numbers2:
// [12,20,39,40,60,28888]


// -------------------------------
// Method 2 (Real Copy using Spread)
// -------------------------------

// Create a NEW array.
//
// Copy all elements from 'number'
// then add 22 and 586.
let numbers2 = [...number, 22, 586];

// numbers2:
// [12,20,39,40,60,22,586]


// Add 9999 only to the original array.
number.push(9999);

// Original array:
// [12,20,39,40,60,9999]

// numbers2 remains unchanged because
// spread creates a new array.
console.log(numbers2);

// Output:
// [12,20,39,40,60,22,586]


// ============================================
// Spread Operator with Objects
// ============================================

// Create an object.
let studens = {
    name: "shayon",
    age: 21,
    gpa: 3.733
};


// -------------------------------
// Reference Copy
// -------------------------------

// let studens2 = studens;
//
// Both variables refer to the SAME object.
//
// studens.wt = 50;
//
// studens2 will also have wt.


// -------------------------------
// Real Copy using Spread
// -------------------------------

// Copy all properties of 'studens'
// and add a new property called 'mark'.
let studens2 = {
    ...studens,
    mark: 89
};

// Add a new property to the original object.
studens.wt = 50;

// Since studens2 is a new object,
// it will NOT receive the wt property.
console.log(studens2);

// Output:
// {
//   name: "shayon",
//   age: 21,
//   gpa: 3.733,
//   mark: 89
// }


// ============================================
// Rest Parameter (...)
// ============================================

// Rest parameter collects multiple arguments
// into a single array.
//
// The rest parameter MUST always be the LAST parameter.
function addSum(a, b, c, ...restNumbers) {

    // restNumbers is an array containing
    // all remaining arguments.
    console.log(restNumbers);

    // Output:
    // [4, 5, 6, 67, 2, 1]

    let sum = 0;

    // Loop through every element.
    for (const x of restNumbers) {
        sum += x;
    }

    // Return the total sum.
    return a + b + c + sum;
}


// Call the function.
//
// a = 2
// b = 3
// c = 34
//
// restNumbers = [4,5,6,67,2,1]
console.log(addSum(2, 3, 34, 4, 5, 6, 67, 2, 1));

// Sum:
//
// First three:
// 2 + 3 + 34 = 39
//
// Rest:
// 4 + 5 + 6 + 67 + 2 + 1 = 85
//
// Total:
// 39 + 85 = 124

// Output:
// 124