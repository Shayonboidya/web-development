// ============================================
// Undefined
// ============================================

// A variable is declared but no value is assigned.
// JavaScript automatically gives it the value 'undefined'.
let x;

console.log(x);

// Output:
// undefined


// ============================================
// Null
// ============================================

// null means the value is intentionally empty.
// Unlike undefined, null is assigned manually.
let y = null;

console.log(y);

// Output:
// null


// ============================================
// Accessing a Non-Existing Property
// ============================================

// Create an object.
const s = {
    name: "shayon"
};

// The object has no property named 'age'.
// Therefore JavaScript returns undefined.
console.log(s.age);

// Output:
// undefined


// ============================================
// Missing Function Argument
// ============================================

// Create an arrow function.
let sum = (n) => {

    // Return the parameter.
    return n;
};

// Call the function without passing an argument.
//
// Since no value is provided,
// n automatically becomes undefined.
console.log(sum());

// Output:
// undefined



// ============================================
// Falsy Values
// ============================================

// Falsy values are values that JavaScript
// automatically treats as false in conditions.

// There are only 6 commonly used falsy values:
//
// 1. false
// 2. null
// 3. 0
// 4. "" (empty string)
// 5. undefined
// 6. NaN


// --------------------------------------------
// false
// --------------------------------------------

if (false) {
    console.log(false);
}

// Doesn't execute because false is falsy.


// --------------------------------------------
// 0
// --------------------------------------------

if (0) {
    console.log(0);
}

// Doesn't execute because 0 is falsy.


// --------------------------------------------
// Empty String
// --------------------------------------------

if ("") {
    console.log("");
}

// Doesn't execute because an empty string is falsy.


// --------------------------------------------
// null
// --------------------------------------------

if (null) {
    console.log(null);
}

// Doesn't execute because null is falsy.


// --------------------------------------------
// undefined
// --------------------------------------------

if (undefined) {
    console.log(undefined);
}

// Doesn't execute because undefined is falsy.


// --------------------------------------------
// NaN
// --------------------------------------------

if (NaN) {
    console.log(NaN);
}

// Doesn't execute because NaN is falsy.



// ============================================
// Truthy Values
// ============================================

// Any value that is NOT falsy
// is considered truthy.


// Non-empty string
if ("hello") {
    console.log("hello");
}

// Output:
// hello


// Empty object
if ({}) {
    console.log("empty object");
}

// Output:
// empty object


// Empty array
if ([]) {
    console.log("empty array");
}

// Output:
// empty array