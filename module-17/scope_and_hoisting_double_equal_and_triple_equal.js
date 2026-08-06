// ============================================
// Equality Operators
// ============================================

// == (Loose Equality)
// Compares only the values.
// If the data types are different,
// JavaScript first converts one value to match the other.

// === (Strict Equality)
// Compares both the value AND the data type.
// No automatic type conversion happens.

console.log(5 == '5');

// Number 5 and String "5"
// JavaScript converts "5" to the number 5.
//
// 5 == 5
//
// Output:
// true

console.log(5 === '5');

// Types are different.
//
// Number !== String
//
// Output:
// false

console.log(0 == false);

// false is converted to 0.
//
// 0 == 0
//
// Output:
// true

console.log(0 === false);

// Number !== Boolean
//
// Output:
// false

console.log(null == undefined);

// Special rule in JavaScript:
//
// null and undefined are considered
// loosely equal.
//
// Output:
// true

console.log(null === undefined);

// Different data types.
//
// Output:
// false



// ============================================
// Scope
// ============================================

// JavaScript has mainly three types of scope:
//
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope
//
// var -> Function Scope
// let -> Block Scope
// const -> Block Scope



// ============================================
// Global Scope
// ============================================

// This variable is declared outside every block
// and function, so it is global.
let nam = "shayon Boidya";

// Accessible inside this if block.
if (nam) {
    console.log(nam);
}

// Accessible inside this loop.
for (let i = 0; i < nam.length; i++) {
    console.log(nam[i]);
}

// It is also accessible here.
console.log(nam);



// ============================================
// Block Scope
// ============================================

// Variables declared with let or const
// exist only inside the block {}.

if (true) {

    let pi = 3.1416;

    console.log(pi);

}

// console.log(pi);

// ReferenceError:
// pi is not defined


{
    let address = "khulna";
}

// console.log(address);

// ReferenceError:
// address is not defined



// ============================================
// var ignores Block Scope
// ============================================

// var only follows function scope.

{
    var adddre = "bangladesh";
}

// Because var ignores block scope,
// it is still accessible outside the block.
console.log(adddre);

// Output:
// bangladesh



// ============================================
// Function Scope
// ============================================

// Variables declared with var inside
// a function stay inside that function.

let add = (a, b) => {

    var sum = a + b;

    return sum;
};

// console.log(sum);

// ReferenceError:
// sum is not defined

console.log(add(3, 5));

// Output:
// 8



// ============================================
// Hoisting
// ============================================

// Hoisting means:
//
// Before executing your code,
// JavaScript moves declarations to the top
// of their scope.
//
// Only declarations are hoisted,
// NOT initializations.


// --------------------------------------------
// Hoisting with var
// --------------------------------------------

// JavaScript internally treats this like:
//
// var age;
//
// console.log(age);
//
// age = 21;

console.log(age);

// Output:
// undefined

var age = 21;

console.log(age);

// Output:
// 21



// --------------------------------------------
// Hoisting with let
// --------------------------------------------

// let is also hoisted,
// BUT it stays inside the
// Temporal Dead Zone (TDZ)
// until JavaScript reaches its declaration.

// console.log(nitu_age);

// ReferenceError:
// Cannot access 'nitu_age'
// before initialization

let nitu_age = 20;

console.log(nitu_age);

// Output:
// 20



// --------------------------------------------
// Hoisting with Function Declaration
// --------------------------------------------

// Function declarations are fully hoisted.
//
// JavaScript already knows this function
// before reaching its definition.

console.log(addSum(40, 58));

// Output:
// 98

function addSum(x, y) {
    return x + y;
}

console.log(addSum(4, 5));

// Output:
// 9