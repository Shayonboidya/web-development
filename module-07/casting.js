// ============================================
// Converting String to Number
// parseInt(), parseFloat(), toFixed()
// ============================================

// Create a string.
let numberString = "20";

// Convert the string into an integer.
let number = parseInt(numberString);

// Check the data type.
console.log(typeof number);

// Output:
// number

// Print the converted value.
console.log(number);

// Output:
// 20



// ============================================
// parseFloat()
// ============================================

// Store a decimal number as a string.
number = "30.44";

// Convert the string to a floating-point number.
console.log(parseFloat(number));

// Output:
// 30.44


// numberString is still a string.
// parseFloat() did not change it.
console.log(typeof numberString);

// Output:
// string



// ============================================
// parseInt() Stops at the First Non-Numeric Character
// ============================================

// String starts with a number
// followed by letters.
let age = "21year";

// parseInt() reads from left to right.
//
// It keeps reading numbers until
// it finds a non-numeric character.
console.log(parseInt(age));

// Output:
// 21


// More examples:
//
// parseInt("100kg")   -> 100
// parseInt("50px")    -> 50
// parseInt("12abc")   -> 12
// parseInt("abc12")   -> NaN
//
// If the string does NOT start with a number,
// parseInt() returns NaN.



// ============================================
// Decimal Precision
// ============================================

// Create two decimal numbers.
let a = 5.1;
let b = 88.2;

// Add them.
let sum = a + b;

// sum = 93.30000000000001
//
// Due to floating-point precision,
// JavaScript may not represent decimal
// values exactly.


// toFixed(2)
//
// Keeps only 2 digits after the decimal point.
//
// IMPORTANT:
// toFixed() returns a STRING.
let fixedSum = sum.toFixed(2);

// fixedSum = "93.30"


// parseFloat() converts the string
// back into a number.
console.log(parseFloat(fixedSum));

// Output:
// 93.3


// Same as writing:
console.log(parseFloat((a + b).toFixed(2)));