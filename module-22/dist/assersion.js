"use strict";
// ============================================================
// TypeScript: unknown, Type Assertion and as const
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// 1. UNKNOWN
// ============================================================
// `unknown` means:
// "We do not know the type of this value yet."
//
// Unlike `any`, TypeScript does NOT allow us to directly
// use methods or properties on an unknown value.
let value;
// These are NOT allowed:
//
// value.toUpperCase(); // ❌
// value.toFixed(2);    // ❌
//
// TypeScript does not know whether `value` is a string,
// number, boolean, object, etc.
// ============================================================
// 2. TYPE ASSERTION USING `as`
// ============================================================
// We can tell TypeScript what type we believe the value is.
//
// Important:
// Type assertion does NOT convert the actual value.
//
// It only tells TypeScript:
// "Treat this value as a string."
const newValue = value;
// Now TypeScript allows string methods.
const upper = newValue.toUpperCase();
// ============================================================
// 3. TYPE ASSERTION TO NUMBER
// ============================================================
// Here we tell TypeScript that `value` should be treated as number.
const num = value;
// TypeScript now allows number methods.
const newNum = num.toFixed(2);
// IMPORTANT:
// `as number` does NOT convert a string into a number.
//
// Example:
//
// const value: unknown = "100";
// const num = value as number;
//
// `num` is still actually a string at runtime.
//
// Type assertion only affects TypeScript's type checking.
// ============================================================
// 4. UNKNOWN + TYPE NARROWING
// ============================================================
// Type assertion is not always the safest solution.
//
// A better approach is to check the actual type first.
let data = "Shayon";
if (typeof data === "string") {
    // Inside this block, TypeScript knows
    // that data is a string.
    console.log(data.toUpperCase());
}
// Another example:
let numberData = 100;
if (typeof numberData === "number") {
    // TypeScript now knows numberData is a number.
    console.log(numberData.toFixed(2));
}
// `data` can contain anything.
let userData = {
    name: "Kamrul",
    age: 23
};
// Type assertion tells TypeScript to treat userData as User.
const user = userData;
console.log(user.name);
console.log(user.age);
// ============================================================
// 6. TYPE ASSERTION DOES NOT VALIDATE DATA
// ============================================================
// This is an important warning.
//
// TypeScript will accept this assertion:
const fakeUser = {
    name: 100
};
// But the actual value of `name` is still a number.
//
// `as User` does NOT transform:
//
// 100 -> "100"
//
// It only changes what TypeScript assumes about the value.
console.log(fakeUser);
// ============================================================
// 7. AS CONST
// ============================================================
// `as const` makes the entire value readonly
// and preserves literal types.
const ManInfo = {
    name: "kamf,mf",
    age: 23
};
// Without `as const`, TypeScript normally infers:
//
// name -> string
// age  -> number
//
// With `as const`, TypeScript infers:
//
// name -> "kamf,mf"
// age  -> 23
// Therefore these values become readonly:
//
// ManInfo.name = "Shayon"; // ❌
// ManInfo.age = 24;        // ❌
// ============================================================
// 8. AS CONST WITH ARRAYS
// ============================================================
// `as const` also works with arrays.
const roles = ["Admin", "Moderator", "Guest"];
// Without `as const`:
//
// string[]
//
// With `as const`:
//
// readonly ["Admin", "Moderator", "Guest"]
// The values are now literal types.
// ============================================================
// 9. AS CONST + UNION TYPE
// ============================================================
// We can use an array with `as const`
// to create a readonly tuple.
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const today = "Friday";
// const wrongDay: Day = "Holiday"; // ❌
// ============================================================
// 10. UNKNOWN vs ANY
// ============================================================
// `any` disables most type checking.
let anyValue = "Hello";
anyValue.toUpperCase(); // TypeScript allows this
// `unknown` keeps type safety.
let unknownValue = "Hello";
// unknownValue.toUpperCase(); // ❌
// We must check the type first.
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // ✅
}
//# sourceMappingURL=assersion.js.map