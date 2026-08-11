// ============================================================
// Problem 01: Nested Object Destructuring
// ============================================================

// getRespons() receives an object as a parameter.
let getRespons = (obj) => {

    // Print the complete object.
    console.log(obj);


    // Nested object destructuring.
    //
    // The object structure is:
    //
    // {
    //     user: {
    //         name: "...",
    //         age: ...
    //     }
    // }
    //
    // user -> access the user object
    // name -> rename it as username
    // age  -> store the age
    //
    // age = 18 means:
    // If age is missing, use 18 as the default value.

    const {
        user: {
            name: username,
            age = 18
        }
    } = obj;


    // Print the destructured name.
    console.log(username);


    // Print the destructured age.
    console.log(age);
};


// ------------------------------------------------------------
// First function call
// ------------------------------------------------------------

console.log(
    getRespons({
        user: {
            name: "shayon",
            age: 22
        }
    })
);


// Here:
//
// username = "shayon"
// age = 22
//
// Output inside the function:
//
// { user: { name: 'shayon', age: 22 } }
// shayon
// 22
//
// getRespons() does not return anything,
// so console.log(getRespons(...)) also prints:
//
// undefined



// ------------------------------------------------------------
// Second function call
// ------------------------------------------------------------

console.log(
    getRespons({
        user: {
            name: "shayon"
        }
    })
);


// Here:
//
// username = "shayon"
// age is missing.
//
// Therefore the default value is used:
//
// age = 18
//
// Output inside the function:
//
// { user: { name: 'shayon' } }
// shayon
// 18
//
// Again, the function has no return statement,
// so the outside console.log() prints:
//
// undefined



// ============================================================
// Problem 02: Swap Two Variables
// ============================================================

let swap = (a, b) => {

    // --------------------------------------------------------
    // Traditional XOR approach
    // --------------------------------------------------------
    //
    // This can swap two integer values without a
    // temporary variable.
    //
    // a = a ^ b;
    // b = a ^ b;
    // a = a ^ b;
    //
    // But this approach is less readable and is
    // generally not preferred in modern JavaScript.


    // --------------------------------------------------------
    // Modern JavaScript approach
    // --------------------------------------------------------

    // Create an array containing the values of b and a.
    //
    // Example:
    //
    // a = 10
    // b = 20
    //
    // [b, a] becomes:
    // [20, 10]
    //
    // Then array destructuring assigns:
    //
    // a = 20
    // b = 10

    [a, b] = [b, a];


    // Return an object containing the swapped values.
    return { a, b };
};


// Call the function.
console.log(swap(10, 20));


// Output:
//
// { a: 20, b: 10 }



// ============================================================
// Problem 03: Array Destructuring + Rest
// ============================================================

// Create an array.
let arr = [10, 2, 3, 0, 20, 3, 0, 2, 0, 50];


// Array destructuring:
//
// first  -> first element
// second -> second element
// ...rest -> all remaining elements
//
// Important:
// The rest variable must always be LAST.

let [fisrt, sec, ...rest] = arr;


// Print the variables.
console.log(fisrt, sec, rest);


// Output:
//
// 10
// 2
// [3, 0, 20, 3, 0, 2, 0, 50]