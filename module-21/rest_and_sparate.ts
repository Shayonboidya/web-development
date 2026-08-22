// ============================================================
// Destructuring and Spread Operator
// ============================================================


// ============================================================
// 1. OBJECT DESTRUCTURING
// ============================================================

const devices: {
    namePh: string,
    type: string,
    price: number,
    color: string,
    stroge: number
} = {
    namePh: "iphone",
    type: "smart phone",
    price: 222,
    color: "black",
    stroge: 128
};


// Object destructuring allows us to extract properties
// from an object into separate variables.
//
// Here:
// namePh -> extracted from devices
//
// The `...deviceInfo` syntax collects all remaining
// properties into a new object.

const { namePh, ...deviceInfo } = devices;

console.log(namePh);
// "iphone"

console.log(deviceInfo);
// {
//     type: "smart phone",
//     price: 222,
//     color: "black",
//     stroge: 128
// }


// IMPORTANT:
// `...` in this situation is called the Rest Operator.
//
// It collects the remaining properties.


/*
    Original object:

    devices
    ├── namePh
    ├── type
    ├── price
    ├── color
    └── stroge


    After destructuring:

    namePh
        ↓
    "iphone"

    deviceInfo
        ↓
    {
        type,
        price,
        color,
        stroge
    }
*/


// ============================================================
// 2. ARRAY SPREAD OPERATOR
// ============================================================

// This is an array containing only numbers.

const numbers2: number[] = [1, 2, 3, 4, 5];


// The spread operator `...` expands the elements
// of numbers2 into a new array.
//
// numbers2:
// [1, 2, 3, 4, 5]
//
// After spreading:
// 1, 2, 3, 4, 5
//
// Then we add 6, 7, and 8.

const newNumbers3: number[] = [...numbers2, 6, 7, 8];

console.log(newNumbers3);
// [1, 2, 3, 4, 5, 6, 7, 8]


// ============================================================
// 3. STRING ARRAY
// ============================================================

const newNumbers4: string[] = ["karim", "rahim"];


// We cannot combine a string array with a number array
// when the result is declared as number[].
//
// const allNumber: number[] = [...newNumbers4, ...numbers2];
// ❌ Error
//
// newNumbers4 contains strings,
// but allNumber expects only numbers.


// ============================================================
// 4. COMBINING TWO NUMBER ARRAYS
// ============================================================

// Both arrays contain only numbers.
//
// newNumbers3 -> number[]
// numbers2    -> number[]
//
// Therefore, they can safely be combined into another number[].

const allNumber: number[] = [...newNumbers3, ...numbers2];

console.log(allNumber);


// Result:
//
// [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5]