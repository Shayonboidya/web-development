"use strict";
// ============================================================
// TypeScript: Union, Any, Unknown, Never, Null, Undefined,
// and Void
// ============================================================
// ============================================================
// 1. UNION TYPE
// ============================================================
// A union type allows a variable or parameter
// to have more than one possible type.
//
// Here, `amount` can be either:
// - number
// - string
//
// The `|` symbol is called the Union Operator.
function calculateTaxs(amount, taxRate) {
    // If amount is a string,
    // convert it into a number before calculation.
    if (typeof amount === "string") {
        amount = parseFloat(amount);
    }
    // At this point, TypeScript knows that amount is a number.
    return amount * taxRate;
}
// Passing a number is valid.
const myTax = calculateTaxs(100, 0.3);
console.log(myTax);
// 30
// Passing a string is also valid because
// amount accepts both number and string.
//
// const tax = calculateTaxs("100", 0.3);
// console.log(tax);
// 30
// ============================================================
// 2. NULL
// ============================================================
// `null` represents the intentional absence of a value.
//
// A variable can be either a string or null.
let myFuture = "black";
console.log(myFuture);
// The value can later become null.
myFuture = null;
console.log(myFuture);
// This is not allowed:
//
// myFuture = 100;
// ❌ Error because the type is string | null
// ============================================================
// 3. UNDEFINED
// ============================================================
// `undefined` usually represents a value that has not been assigned.
let myFriend;
// No value has been assigned yet,
// so the current value is undefined.
console.log(myFriend);
// A number can also be assigned.
myFriend = 25;
console.log(myFriend);
// It can become undefined again.
myFriend = undefined;
// ============================================================
// 4. ANY
// ============================================================
// `any` disables most TypeScript type checking.
//
// A variable with `any` can contain almost any type.
const myVariable = "hello";
console.log(myVariable);
// These are allowed with `any`:
let anything = "hello";
anything = 100;
anything = true;
anything = [];
anything = {};
// IMPORTANT:
// Avoid `any` when possible because it removes
// much of TypeScript's type safety.
// ============================================================
// 5. UNKNOWN
// ============================================================
// `unknown` can also hold values of any type,
// but it is safer than `any`.
//
// TypeScript does not allow us to use an unknown value
// until we check its type.
const me = "hey";
// This is not allowed:
//
// console.log(me.toUpperCase());
// ❌ Error because TypeScript does not know
// whether `me` is a string.
// We must check the type first.
if (typeof me === "string") {
    console.log(me.toUpperCase());
}
// `unknown` is useful when we receive data
// from an external or untrusted source,
// such as an API response.
// ============================================================
// 6. NEVER
// ============================================================
// `never` represents a value that will never occur.
//
// A common example is a function that always throws an error.
function throwError(message) {
    throw new Error(message);
}
// This function never successfully returns a value.
//
// throwError("Something went wrong");
// Another example is an infinite loop.
function infiniteLoop() {
    while (true) {
        // This loop never ends.
    }
}
// IMPORTANT:
// `never` is different from `void`.
//
// void:
// The function finishes but does not return a value.
//
// never:
// The function never successfully finishes.
// ============================================================
// 7. VOID
// ============================================================
// `void` is commonly used for functions
// that do not return a meaningful value.
function printMessage(message) {
    console.log(message);
}
printMessage("Hello TypeScript");
// The function performs an action,
// but it does not return a value.
// ============================================================
// 8. UNDEFINED VS NULL
// ============================================================
// `undefined` usually means:
// "A value has not been assigned."
let userName;
console.log(userName);
// undefined
// `null` usually means:
// "There is intentionally no value."
let selectedUser = null;
console.log(selectedUser);
// null
// ============================================================
// 9. TYPEOF
// ============================================================
// `typeof` allows us to check the runtime type of a value.
//
// Common results:
//
// typeof "hello" -> "string"
// typeof 100     -> "number"
// typeof true    -> "boolean"
// typeof undefined -> "undefined"
console.log(typeof "hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
