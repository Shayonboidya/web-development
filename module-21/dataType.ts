// ============================================================
// TypeScript Basic Data Types
// ============================================================


// ============================================================
// 1. STRING
// ============================================================

// TypeScript can automatically infer that this value is a string.
// let name = "shayon Boidya";

// We can also explicitly define the type using a type annotation.
let nameOfMe: string = "shayon Boidya";

console.log(nameOfMe);


// ============================================================
// 2. NUMBER
// ============================================================

// TypeScript can automatically infer that this value is a number.
// let price = 120;

// We can explicitly define the variable as a number.
let price: number = 120;

console.log(price);


// ============================================================
// 3. BOOLEAN
// ============================================================

// TypeScript can automatically infer that this value is a boolean.
// let areYouStudent = true;

// We can explicitly define the variable as a boolean.
let areYouStudent: boolean = true;

console.log(areYouStudent);


// ============================================================
// 4. ANY
// ============================================================

// The `any` type disables most of TypeScript's type checking
// for this variable.
//
// This means the variable can hold values of different types.

let stock: any = 100;

// The value is initially a number.
stock = "hello";

// The value is now a string.
console.log(stock);


// IMPORTANT:
// Avoid using `any` whenever possible.
//
// One of the main purposes of TypeScript is type safety.
// Using `any` removes much of that protection.
//
// Example:
//
// let stock: any = 100;
// stock.toUpperCase();
//
// TypeScript may not report an error,
// but this can cause a runtime error because 100 is a number.
//
// A safer alternative is usually `unknown`.


// ============================================================
// 5. ARRAY
// ============================================================

// This array can contain only numbers.
//
// `number[]` means:
// "An array where every element must be a number."

let numbers2: number[] = [1, 2, 3, 4, 5];


// The following operations are not allowed:
//
// numbers2.push(true);  // ❌ Boolean is not allowed
// numbers2.push("2");   // ❌ String is not allowed


// The array is restricted to number values.
console.log(numbers2);


// ------------------------------------------------------------
// String Array
// ------------------------------------------------------------

// This array can contain only strings.

let names: string[] = ["shayon", "nitu"];

console.log(names);


// Examples:
//
// names.push("rahim"); // ✅ Valid
// names.push(100);     // ❌ Invalid


// ============================================================
// 6. OBJECT
// ============================================================

// We can define the type of each property inside an object.
//
// name       -> string
// age        -> number
// isStudent2 -> boolean

const personInfo: {
    name: string;
    age: number;
    isStudent2: boolean;
} = {
    name: "shayon",
    age: 22,
    isStudent2: true
};


// The properties of a const object can still be changed.
//
// `const` prevents reassigning the variable itself,
// but it does not make the object immutable.

personInfo.age = 21;

console.log(personInfo);


// However, we cannot assign a completely new object:
//
// personInfo = {
//     name: "Nitu",
//     age: 20,
//     isStudent2: false
// };
//
// ❌ Error because personInfo was declared with `const`.


// ============================================================
// 7. TUPLE
// ============================================================

// A tuple is a special type of array where:
// 1. The number of elements can be defined.
// 2. The type of each position can be defined.
// 3. The order of the types matters.
//
// In this example:
//
// index 0 -> number
// index 1 -> number

let location2: [number, number] = [22.466861, 90.378889];

console.log(location2);


// Example:
//
// let location2: [number, number] = [22.466861, 90.378889];
//                              ↑         ↑
//                           latitude  longitude


// The order of types is important in a tuple.
//
// The following example is invalid:
//
// let location2: [number, number] = ["22", 90.378889];
//
// ❌ Error because the first value must be a number.