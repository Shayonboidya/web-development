// ================================
// Traditional Function
// ================================

// This is the traditional way to create a function in JavaScript.
//
// function display(name) {
//     // 'name' is a parameter that receives the value
//     // passed when the function is called.
//
//     // Template literals (backticks ``) allow us to
//     // insert variables using ${}.
//     return `hello ${name}, welcome.`;
// }
//
// Example:
// display("Shayon");
// Output:
// hello Shayon, welcome.


// ================================
// Arrow Function
// ================================

// Arrow functions were introduced in ES6.
//
// Here, 'display' is a constant variable that stores a function.
const display = (name) => {

    // Return a greeting message.
    return `hello ${name}, welcome.`;
};


// ================================
// Arrow Function Without Parameters
// ================================

// Since there are no parameters,
// we use empty parentheses ().
const sayHi = () => {

    // Return a fixed string.
    return "hello";
};


// ================================
// Function Calls
// ================================

// Call the function and pass "shayon" as an argument.
console.log(display("shayon"));
// Output:
// hello shayon, welcome.

// Call the function without arguments.
console.log(sayHi());
// Output:
// hello


// ================================
// The "this" Keyword
// ================================

// If you uncomment this line,
// it prints the global object depending on where the code runs.
//
// Browser:
// Window object
//
// Node.js:
// {} (empty object) or module object
//
// console.log(this);


// ================================
// Object Example
// ================================

// Create an object named 'student'.
const student = {

    // Object properties
    name: "shayon",
    age: 21,

    // ----------------------------
    // Traditional Function
    // ----------------------------

    // Inside a traditional function,
    // 'this' refers to the object that called the function.
    getName: function () {

        // Here,
        // this === student
        //
        // Therefore:
        // this.name -> "shayon"
        // this.age  -> 21
        return `name : ${this.name}. age : ${this.age}`;
    },

    // ----------------------------
    // Arrow Function
    // ----------------------------

    // Arrow functions DO NOT have their own 'this'.
    // They inherit 'this' from the surrounding scope.
    //
    // Here, the surrounding scope is NOT the student object.
    getAge: () => {

        // Because 'this' does not refer to student,
        // this.age is undefined.
        return `age : ${this.age}`;
    }

};


// Call getName()
console.log(student.getName());

// Output:
// name : shayon. age : 21


// Call getAge()
console.log(student.getAge());

// Output:
// age : undefined

// Why?
//
// Because arrow functions don't bind their own 'this'.
// They use the surrounding 'this', not the object.


// ================================
// Function Hoisting
// ================================

// This line tries to call SayHeloo()
// BEFORE it is created.
console.log(SayHeloo());


// Arrow function stored in a const variable.
const SayHeloo = () => {
    return "heool";
};