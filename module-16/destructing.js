// ============================================
// Array Destructuring
// ============================================

// Create an array.
const numbers = [10, 20, 30, 405, 50];

// Normally, we access array elements using their index.
//
// console.log(numbers[0]); // 10
// console.log(numbers[2]); // 30
// console.log(numbers[1]); // 20


// Array destructuring allows us to extract values
// from an array and store them into variables
// in a single line.

const [n1, n2, , n4] = numbers;

// Position Mapping:
//
// numbers[0] -> n1 = 10
// numbers[1] -> n2 = 20
// numbers[2] -> skipped (because of the empty space)
// numbers[3] -> n4 = 405
//
// numbers[4] (50) is ignored because we didn't create a variable for it.

// console.log(n1, n2, n4);

// Output:
// 10 20 405



// ============================================
// Object Destructuring
// ============================================

// Create an object.
const studens = {
    name: "shayon Boidya",
    age: 21,
    cgpa: 3.733,

    // Nested object
    mark: {
        physics: 98,
        math: 99,
        english: 44
    }
};

// Normally we access object properties like this:
//
// console.log(studens.name);
// console.log(studens.age);


// --------------------------------------------
// Simple Object Destructuring
// --------------------------------------------

// const { age, name, cgpa } = studens;
//
// Creates:
//
// age = 21
// name = "shayon Boidya"
// cgpa = 3.733



// --------------------------------------------
// Rename Variables
// --------------------------------------------

// const {
//     age,
//     name: fullname,
//     cgpa,
//     mark
// } = studens;
//
// Here:
//
// age -> age
//
// name -> fullname
//
// cgpa -> cgpa
//
// mark -> mark object
//
// Now you can write:
//
// console.log(mark);
//
// Output:
// {
//   physics:98,
//   math:99,
//   english:44
// }



// --------------------------------------------
// Nested Object Destructuring
// --------------------------------------------

// Destructure the object and also extract
// values from the nested 'mark' object.
const {
    age,
    name: fullname,
    cgpa,

    // Go inside the mark object
    // and extract these properties.
    mark: {
        math,
        physics,
        english
    }

} = studens;


// After destructuring:
//
// age = 21
//
// fullname = "shayon Boidya"
//
// cgpa = 3.733
//
// math = 99
//
// physics = 98
//
// english = 44


// console.log(age, fullname, cgpa);

// Output:
// 21 shayon Boidya 3.733


// Accessing nested object normally:
//
// console.log(studens.mark.math);
//
// Output:
// 99



// IMPORTANT:
//
// In this destructuring:
//
// mark: { math, physics, english }
//
// JavaScript extracts ONLY the properties
// inside mark.
//
// It DOES NOT create a variable named "mark".

// Therefore this causes an error:
//
// console.log(mark);
//
// ReferenceError:
// mark is not defined


// These variables DO exist.
console.log(math, physics, english);

// Output:
// 99 98 44