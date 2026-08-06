/**
 * ============================================
 * Data Types in JavaScript
 * ============================================
 *
 * JavaScript data types are divided into two categories:
 *
 * 1. Primitive Data Types
 *    - String
 *    - Number
 *    - Boolean
 *    - Null
 *    - Undefined
 *    - Symbol
 *    - BigInt (introduced in ES2020)
 *
 * 2. Non-Primitive (Reference) Data Types
 *    - Object
 *    - Array
 *    - Function
 */


// ============================================
// Primitive Data Types
// ============================================

// String
// A sequence of characters enclosed in quotes.
let name = "shayon";

// Number
// Represents both integers and decimal numbers.
let num = 23;

// Boolean
// Can only be true or false.
let isTrue = true;

// Null
// Represents an intentional empty value.
let xx = null;

// Undefined
// Means a variable has been declared
// but no value has been assigned.
let undefineIs = undefined;


// ============================================
// typeof Operator
// ============================================

// typeof returns the data type of a value.

// Returns "string"
console.log(typeof (name));

// Returns "number"
console.log(typeof (num));

// Returns "boolean"
console.log(typeof (isTrue));

// Surprisingly returns "object"
console.log(typeof (xx));

// Returns "undefined"
console.log(typeof (undefineIs));


// Output:
//
// string
// number
// boolean
// object
// undefined



// ============================================
// Non-Primitive (Reference) Data Types
// ============================================

// Object
// Stores data as key-value pairs.
let student = {
    nameOf: "shayon",
    age: 21,
};


// Function
// Functions are also objects in JavaScript.
let fn = () => {
    return 2;
};


// Array
// Arrays store multiple values.
//
// Note:
// Arrays are actually a special type of object.
let arr = [120, 303, 34];


// typeof object
console.log(typeof (student));

// typeof function
console.log(typeof (fn));

// typeof array
console.log(typeof (arr));


// Output:
//
// object
// function
// object