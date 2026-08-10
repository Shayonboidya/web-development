// ============================================================
// Problem 01: Flexible Total Calculator
// ============================================================
//
// calculateTotal(...prices)
//
// The function should:
// 1. Accept any number of prices.
// 2. Use a default discount of 0%.
// 3. Calculate the total price.
// 4. Apply the discount.
// 5. Return the final amount.
//
// We use:
// - Default parameter
// - Rest parameter (...prices)
// - reduce()
// ============================================================


let calculateTotal = (discount = 0, ...prices) => {

    // --------------------------------------------
    // Rest Parameter
    // --------------------------------------------
    //
    // ...prices collects all remaining arguments
    // into an array.
    //
    // Example:
    //
    // calculateTotal(5, 100, 200, 50, 300)
    //
    // discount = 5
    // prices = [100, 200, 50, 300]


    // --------------------------------------------
    // Calculate Total
    // --------------------------------------------
    //
    // reduce() combines all prices into one value.
    //
    // acu -> accumulator
    // cur -> current price
    //
    // 0 is the initial value of the accumulator.

    let sum = prices.reduce((acu, cur) => {
        return acu + cur;
    }, 0);


    // --------------------------------------------
    // Apply Discount
    // --------------------------------------------
    //
    // Formula:
    //
    // discount amount = sum * discount / 100
    //
    // final price = sum - discount amount

    return sum - (sum * discount / 100.0);
};


// --------------------------------------------
// Function Call
// --------------------------------------------

console.log(calculateTotal(5, 100, 200, 50, 300));


// prices:
// 100 + 200 + 50 + 300
// = 650
//
// Discount:
// 650 * 5 / 100
// = 32.5
//
// Final:
// 650 - 32.5
// = 617.5
//
// Output:
// 617.5



// ============================================================
// Problem 02: Merge Two Arrays and Remove Duplicates
// ============================================================

let arr1 = [10, 20, 30, 40, 50];

let arr2 = [60, 20, 87, 10, 50];


// --------------------------------------------
// Spread Operator
// --------------------------------------------
//
// ...arr1 expands all elements of arr1.
//
// ...arr2 expands all elements of arr2.
//
// Both arrays are combined into one new array.

let margearray = [...arr1, ...arr2];


// margearray:
//
// [
//     10, 20, 30, 40, 50,
//     60, 20, 87, 10, 50
// ]



// ============================================================
// Method 1: Traditional Loop
// ============================================================

// Create an empty array.
let newMargeArray1 = [];


// Go through every value of margearray.
for (const val of margearray) {

    // includes() checks whether the value
    // already exists in newMargeArray1.

    if (!newMargeArray1.includes(val)) {

        // If the value does not exist,
        // add it to the new array.
        newMargeArray1.push(val);
    }
}

// console.log(newMargeArray1);

// Output:
// [10, 20, 30, 40, 50, 60, 87]



// ============================================================
// Method 2: Set + Spread Operator
// ============================================================

// Set automatically stores only UNIQUE values.
//
// new Set(margearray)
// converts the array into a Set
// and removes duplicate values.
//
// Then:
//
// ...new Set(margearray)
//
// converts the Set values back into an array.

let newMargeArray2 = [...new Set(margearray)];


// console.log(newMargeArray2);

// Output:
// [10, 20, 30, 40, 50, 60, 87]



// ============================================================
// Method 3: Set + Array.from()
// ============================================================

// First create a Set:
//
// new Set(margearray)
//
// Then Array.from() converts the Set
// back into an array.

let newMargeArray = Array.from(new Set(margearray));

console.log(newMargeArray);

// Output:
// [10, 20, 30, 40, 50, 60, 87]