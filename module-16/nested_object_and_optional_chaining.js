// ============================================
// Creating an Object
// ============================================

// Create an object named 'user'.
// An object stores data in the form of key-value pairs.
const user = {
    name: "shayon boidya",
    age: 21,

    // Nested object
    compony: {
        name_of_componey: "BSD componey"
    }
};


// ============================================
// Dot Notation (.)
// ============================================

// Dot notation is the most common way to access
// object properties.

// console.log(user.name, user.age, user.compony.name_of_componey);

// Output:
// shayon boidya 21 BSD componey


// ============================================
// Bracket Notation ([])
// ============================================

// Store a property name inside a variable.
let key = "name";


// This looks for a property literally named "key".
// Since no such property exists, the result is undefined.
//
// user.key
// is equivalent to
// user["key"]

// console.log(user.key);

// Output:
// undefined


// Bracket notation evaluates the variable first.
//
// key = "name"
//
// So:
//
// user[key]
//
// becomes:
//
// user["name"]
//
// which returns the value of the "name" property.
console.log(user[key]);

// Output:
// shayon boidya


// ============================================
// Optional Chaining (?.)
// ============================================

// Create another object.
const user2 = {
    name: "nitu boidya",
    age: 22
};


// This object DOES NOT have a "compony" property.


// --------------------------------------------
// Without Optional Chaining
// --------------------------------------------

// console.log(user2.name, user2.compony.name_of_componey);

// What happens?
//
// Step 1:
// user2.compony
//
// Result:
// undefined
//
// Step 2:
// JavaScript tries:
//
// undefined.name_of_componey
//
// This is impossible, so JavaScript throws an error:
//
// TypeError:
// Cannot read properties of undefined


// --------------------------------------------
// With Optional Chaining
// --------------------------------------------

// ?. means:
//
// "If this object exists, continue."
// "Otherwise, stop and return undefined."

console.log(user2?.compony?.name_of_componey);

// Step by step:
//
// user2 exists ✔
//
// user2.compony
// ↓
// undefined
//
// Because of ?. JavaScript stops here
// instead of throwing an error.
//
// Output:
// undefined
//
// No error is generated.