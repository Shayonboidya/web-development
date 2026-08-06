// ============================================
// Callback Function
// ============================================

// Definition:
//
// A callback function is a function that is
// passed as an argument to another function
// and is executed later when needed.
//
// Easy to remember:
//
// "I will call back later."


// ============================================
// Example 1: Student Registration
// ============================================

// This function receives another function (cb)
// as a parameter.
function resisterInfoStudent(cb) {

    console.log("Updating information...");

    // Execute the callback function.
    return cb();
}


// --------------------------------------------
// Callback Function 1
// --------------------------------------------

// Returns student information.
function studentInfo() {

    let student = {
        name: "shayon Boidya",
        roll: 17,
        cgpa: 3.733
    };

    return student;
}


// --------------------------------------------
// Callback Function 2
// --------------------------------------------

// Returns academic information.
function academicInfo() {

    let result = {
        ssc: "4.62",
        hsc: "3.75"
    };

    return result;
}


// Pass studentInfo as a callback.
//
// Notice:
//
// studentInfo
//
// NOT
//
// studentInfo()
//
// Because we are passing the function itself,
// not calling it immediately.
console.log(resisterInfoStudent(studentInfo));

// Output:
//
// Updating information...
//
// {
//    name: "shayon Boidya",
//    roll: 17,
//    cgpa: 3.733
// }

console.log();


// Pass another callback.
console.log(resisterInfoStudent(academicInfo));

// Output:
//
// Updating information...
//
// {
//    ssc: "4.62",
//    hsc: "3.75"
// }



// ============================================
// Example 2: Calculator using Callback
// ============================================

// Calculator function.
function calculetor(a, b, cb) {

    // Calculate the sum.
    let add = a + b;

    // Pass the result to the callback.
    cb(add);
}


// Callback function.
function display(res) {

    console.log(res);
}


// Pass display as the callback.
calculetor(15, 47, display);

// Step-by-step:
//
// a = 15
// b = 47
//
// add = 62
//
// cb(add)
//
// becomes
//
// display(62)
//
// Output:
// 62