// ============================================================
// TypeScript Function Typing
// ============================================================


// ============================================================
// 1. FUNCTION PARAMETERS AND RETURN TYPE
// ============================================================

// `add2` is a function that accepts two parameters.
//
// num1 -> number
// num2 -> number
//
// The function must return a number.
//
// Syntax:
//
// function functionName(parameter: type): returnType {
//     ...
// }

function add2(num1: number, num2: number): number {
    return num1 + num2;
}


// The function returns a number,
// so `res` should also be a number.

let res: number = add2(2, 1);

console.log(res);


// This is incorrect because add2() returns a number,
// not a string.
//
// let res: string = add2(2, 1);
// ❌ Error


// The function parameters are also type-safe.
//
// add2(2, 1);       // ✅
// add2(10, 20);     // ✅
//
// add2(1, "2");     // ❌ Error
// The second parameter must be a number.


// ============================================================
// 2. FUNCTION WITH ARRAY PARAMETER
// ============================================================

// This function accepts three parameters:
//
// numbers    -> an array containing only numbers
// tax        -> a number
// accountant -> a string
//
// The function returns a boolean.

function calculates(
    numbers: number[],
    tax: number,
    accountant: string
): boolean {
    return true;
}


// All arguments must match the parameter types.
//
// numbers    -> number[]
// tax        -> number
// accountant -> string

let result: boolean = calculates(
    [2, 6, 7, 8, 8],
    2,
    "shayon"
);

console.log(result);


// Examples:
//
// calculates([1, 2, 3], 5, "Shayon"); // ✅
//
// calculates(["1", "2"], 5, "Shayon");
// ❌ The first parameter must be number[]
//
// calculates([1, 2, 3], "5", "Shayon");
// ❌ The second parameter must be number
//
// calculates([1, 2, 3], 5, 100);
// ❌ The third parameter must be string