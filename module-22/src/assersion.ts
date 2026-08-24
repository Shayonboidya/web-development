// ============================================================
// TypeScript: unknown, Type Assertion and as const
// ============================================================


// ============================================================
// 1. UNKNOWN
// ============================================================

// `unknown` means:
// "We do not know the type of this value yet."
//
// Unlike `any`, TypeScript does NOT allow us to directly
// use methods or properties on an unknown value.

let value: unknown;


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

const newValue = value as string;


// Now TypeScript allows string methods.

const upper = newValue.toUpperCase();


// ============================================================
// 3. TYPE ASSERTION TO NUMBER
// ============================================================

// Here we tell TypeScript that `value` should be treated as number.

const num = value as number;


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

let data: unknown = "Shayon";

if (typeof data === "string") {

    // Inside this block, TypeScript knows
    // that data is a string.

    console.log(data.toUpperCase());
}


// Another example:

let numberData: unknown = 100;

if (typeof numberData === "number") {

    // TypeScript now knows numberData is a number.

    console.log(numberData.toFixed(2));
}


// ============================================================
// 5. UNKNOWN WITH OBJECT
// ============================================================

interface User {
    name: string;
    age?: number;
    email?: string;
}


// `data` can contain anything.

let userData: unknown = {
    name: "Kamrul",
    age: 23
};


// Type assertion tells TypeScript to treat userData as User.

const user = userData as User;

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
} as unknown as User;


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
} as const;


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

const roles = ["Admin", "Moderator", "Guest"] as const;


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
] as const;


// `typeof days[number]` creates a union of all values.
//
// Result:
//
// "Sunday"
// | "Monday"
// | "Tuesday"
// | "Wednesday"
// | "Thursday"
// | "Friday"
// | "Saturday"

type Day = typeof days[number];


const today: Day = "Friday";

// const wrongDay: Day = "Holiday"; // ❌


// ============================================================
// 10. UNKNOWN vs ANY
// ============================================================

// `any` disables most type checking.

let anyValue: any = "Hello";

anyValue.toUpperCase(); // TypeScript allows this


// `unknown` keeps type safety.

let unknownValue: unknown = "Hello";

// unknownValue.toUpperCase(); // ❌


// We must check the type first.

if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // ✅
}