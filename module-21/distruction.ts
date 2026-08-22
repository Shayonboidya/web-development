// ============================================================
// Destructuring in TypeScript
// ============================================================


// ============================================================
// 1. OBJECT DESTRUCTURING
// ============================================================

// Define the structure of the user object.
//
// nameOf     -> string
// age        -> number
// isStudent  -> boolean

const user: {
    nameOf: string;
    age: number;
    isStudent: boolean;
} = {
    nameOf: "shayon Boidya",
    age: 22,
    isStudent: true
};


// Object destructuring allows us to extract
// properties from an object into separate variables.
//
// The variable names must match the object property names.

const { nameOf, age, isStudent } = user;

console.log(nameOf);
console.log(age);
console.log(isStudent);


// The above code is similar to:
//
// const nameOf = user.nameOf;
// const age = user.age;
// const isStudent = user.isStudent;


// ============================================================
// 2. ARRAY DESTRUCTURING
// ============================================================

// Define a string array.

const userInfo: string[] = [
    "karim",
    "rahim",
    "drim",
    "morim"
];


// Array destructuring extracts values based on their position.
//
// Index:
// 0 -> karim
// 1 -> rahim
// 2 -> drim
// 3 -> morim


// We can extract all four values:
//
// const [na1, na2, na3, na4] = userInfo;


// We can skip an element by leaving its position empty.
//
// Here:
// na1 -> index 0 -> "karim"
// na2 -> index 1 -> "rahim"
// index 2 -> skipped
// na4 -> index 3 -> "morim"

const [na1, na2, , na4] = userInfo;

console.log(na1, na2, na4);


// The above code is similar to:
//
// const na1 = userInfo[0];
// const na2 = userInfo[1];
// const na4 = userInfo[3];