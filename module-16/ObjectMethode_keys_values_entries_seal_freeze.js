// ============================================
// Object Methods
// keys(), values(), entries(), seal(), freeze()
// ============================================

// Create an object.
const student = {
    name: "shayon boidya",
    age: 21,
    id: 17
};


// ============================================
// Object.keys()
// ============================================

// Object.keys() returns an array containing
// all the property names (keys) of an object.

let keys = Object.keys(student);

// keys = ["name", "age", "id"]

// console.log(keys);


// Loop through every key.
for (const key of keys) {

    // student[key] gets the value of that key.
    // Bracket notation is used because 'key'
    // is a variable.

    // console.log(key, student[key]);
}

// Output:
//
// name shayon boidya
// age 21
// id 17



// ============================================
// Object.values()
// ============================================

// Object.values() returns an array
// containing only the values.

let values = Object.values(student);

// values =
// ["shayon boidya", 21, 17]

// console.log(values);


// Loop through every value.
for (const valu of values) {

    // console.log(valu);
}

// Output:
//
// shayon boidya
// 21
// 17



// ============================================
// Object.entries()
// ============================================

// Object.entries() returns an array
// of key-value pairs.

let entries = Object.entries(student);

// entries =
//
// [
//   ["name","shayon boidya"],
//   ["age",21],
//   ["id",17]
// ]

// console.log(entries);


// Loop through each key-value pair.
for (const item of entries) {

    // item looks like:
    //
    // ["name","shayon boidya"]

    // Array destructuring.
    const [key, valu] = item;

    // console.log(key, valu);
}

// Output:
//
// name shayon boidya
// age 21
// id 17



// ============================================
// Delete a Property
// ============================================

// delete removes a property from an object.

// delete student.name;

// console.log(student);

// Output:
//
// {
//   age:21,
//   id:17
// }



// ============================================
// Object.seal()
// ============================================

// Seal the object.
//
// After sealing:
//
// ✔ Existing properties can be updated.
//
// ✖ New properties cannot be added.
//
// ✖ Existing properties cannot be deleted.
Object.seal(student);


// Try deleting a property.
delete student.name;

// Nothing happens.
// 'name' still exists.


// Try adding a new property.
student.new = "hi";

// Nothing happens.
// 'new' is NOT added.


// Update an existing property.
student.age = 22;

// This works because sealed objects
// allow updating existing values.

// console.log(student);

// Output:
//
// {
//   name:"shayon boidya",
//   age:22,
//   id:17
// }



// ============================================
// Object.freeze()
// ============================================

// Freeze the object.
//
// After freezing:
//
// ✖ Cannot add properties.
//
// ✖ Cannot delete properties.
//
// ✖ Cannot modify existing properties.
Object.freeze(student);


// Try deleting.
delete student.name;

// Doesn't work.


// Try adding.
student.new = "hi";

// Doesn't work.


// Try updating.
student.age = 25;

// Doesn't work.
//
// Age remains 22.

// console.log(student);

// Output:
//
// {
//   name:"shayon boidya",
//   age:22,
//   id:17
// }