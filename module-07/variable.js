// ============================================
// Variables (let, const) and typeof
// ============================================

// 'let' is used to declare a variable
// whose value can be changed later.
let name = "shayon Boidya";

let age = 21;


// 'const' is used to declare a constant.
// Its value cannot be changed after initialization.
const year = 2026;


// Boolean variable.
// It can have only two values:
// true or false.
let are_you_student = true;


// ============================================
// const cannot be reassigned
// ============================================

// year = 230;

// This would produce an error:
//
// TypeError: Assignment to constant variable.
//
// Because 'year' was declared with const.


// Print the value of year.
console.log(year);

// Output:
// 2026



// ============================================
// Updating a let Variable
// ============================================

// Variables declared with let
// can be changed.
age = 22;

console.log(age);

// Output:
// 22



// Print the name.
console.log(name);

// Output:
// shayon Boidya



// ============================================
// typeof Operator
// ============================================

// typeof returns the data type
// of a variable.
console.log(typeof are_you_student);

// Output:
// boolean


// Print the actual value.
console.log(are_you_student);

// Output:
// true