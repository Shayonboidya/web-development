// ============================================
// Pass by Value
// ============================================

// Primitive data types (string, number, boolean, null,
// undefined, bigint, symbol) are passed by value.
//
// This means JavaScript sends a COPY of the value,
// not the original value.

// Original variables.
let name = "shayon";
let age = 21;


// Function receives copies of the values.
function changeName(nam, age) {

    // Only the copied values are changed.
    nam = "Boidya";
    age = 22;

    console.log("Inside function:", nam, age);

    // Output:
    // Boidya 22
}


// Call the function.
changeName(name, age);


// Original variables are NOT changed.
console.log(name, age);

// Output:
// shayon 21



// ============================================
// Pass by Reference (Object Reference)
// ============================================

// Objects are stored by reference.
let person = {
    name: "xxx",
    age: 34
};


// Before changing the object.
console.log(person);

// Output:
// { name: "xxx", age: 34 }


// ============================================
// Mutating an Object
// ============================================

// This function changes the properties
// of the original object.
function changePerson(obj) {

    obj.name = "shayon";
    obj.age = 22;
}


// Pass the object.
changePerson(person);


// The original object is modified.
console.log(person);

// Output:
// { name: "shayon", age: 22 }



// ============================================
// Reassigning an Object
// ============================================

// This function creates a NEW object.
function changePersonEverything(data) {

    // 'data' now points to a completely new object.
    data = {

        name: "nitu",
        age: 20

    };

    console.log(data);

    // Output:
    // { name: "nitu", age: 20 }
}


// Call the function.
changePersonEverything(person);


// The original object is NOT changed.
console.log(person);

// Output:
// { name: "shayon", age: 22 }