// ============================================================
// Problem 01: Add Grade to Student Information
// ============================================================

// Array of student objects.
//
// Each student has:
// name -> student's name
// mark -> student's mark

let studentsInfo = [
    { name: "shayon", mark: 89 },
    { name: "rifat", mark: 29 },
    { name: "nisht", mark: 45 }
];


// ============================================================
// addGrad()
// ============================================================

// This function receives an array of students.

let addGrad = (students) => {


    // --------------------------------------------------------
    // Nested Function: getGread()
    // --------------------------------------------------------
    //
    // This function receives a mark
    // and returns the corresponding grade.

    let getGread = (mark) => {

        // First check whether mark is a number.
        //
        // If mark is not a number:
        // return "Invalid mark".
        //
        // Otherwise:
        //
        // mark >= 90 -> A+
        // mark >= 80 -> A
        // mark >= 60 -> B
        // otherwise  -> Fail

        return (typeof mark != "number")
            ? "Invalid mark"
            : (mark >= 90)
                ? "A+"
                : (mark >= 80)
                    ? "A"
                    : (mark >= 60)
                        ? "B"
                        : "Fail";
    };


    // --------------------------------------------------------
    // map()
    // --------------------------------------------------------
    //
    // map() works on every student.
    //
    // It creates a NEW array.
    //
    // The original studentsInfo array
    // is not modified.

    let addGradStudents = students.map((student) => {


        // ----------------------------------------------------
        // Object Destructuring
        // ----------------------------------------------------
        //
        // Instead of writing:
        //
        // student.name
        // student.mark
        //
        // we extract them directly.

        const { name, mark } = student;


        // Create a new student object.
        //
        // Shorthand property:
        //
        // { name, mark }
        //
        // is the same as:
        //
        // {
        //     name: name,
        //     mark: mark
        // }

        let newStudentAddGrad = {
            name,
            mark,

            // Calculate the grade using getGread().
            gread: getGread(mark)
        };


        // Return the new student object.
        //
        // map() puts this returned object
        // into the new array.

        return newStudentAddGrad;
    });


    // Return the new array.

    return addGradStudents;
};


// ============================================================
// Function Call
// ============================================================

// console.log(addGrad(studentsInfo));


// Expected output:
//
// [
//     { name: "shayon", mark: 89, gread: "A" },
//     { name: "rifat", mark: 29, gread: "Fail" },
//     { name: "nisht", mark: 45, gread: "Fail" }
// ]


// Check the original array.
//
// It is still unchanged.

// console.log(studentsInfo);



// ============================================================
// Problem 02: Shopping Cart Calculator
// ============================================================

// Array of products.
//
// Each object contains:
//
// name  -> product name
// price -> price of one product
// qut   -> quantity

const products = [
    {
        name: "pen",
        price: 100,
        qut: 1,
    },

    {
        name: "book",
        price: 100,
        qut: 2
    },

    {
        name: "headphone",
        price: 200,
        qut: 5
    }
];


// ============================================================
// cardCalculetor()
// ============================================================

// This function calculates:
//
// 1. Total number of items
// 2. Total price

const cardCalculetor = (products) => {


    // Store the total quantity of products.

    let totalItems = 0;


    // Store the total price.

    let totalPrices = 0;


    // --------------------------------------------------------
    // for...of loop
    // --------------------------------------------------------
    //
    // Go through every product object.

    for (const product of products) {


        // Add the quantity to totalItems.

        totalItems += product.qut;


        // Calculate the price for the current product:
        //
        // price × quantity
        //
        // Then add it to totalPrices.

        totalPrices += product.price * product.qut;
    }


    // --------------------------------------------------------
    // Return the final result
    // --------------------------------------------------------
    //
    // Ternary operator:
    //
    // totalItems ? totalItems : 0
    //
    // means:
    //
    // if totalItems is truthy:
    //     use totalItems
    //
    // otherwise:
    //     use 0

    return `Total : ${totalItems ? totalItems : 0} Price: ${totalPrices ? totalPrices : 0}`;
};


// ============================================================
// Function Call
// ============================================================

console.log(cardCalculetor(products));


// ============================================================
// Calculation
// ============================================================
//
// Pen:
// 100 × 1 = 100
//
// Book:
// 100 × 2 = 200
//
// Headphone:
// 200 × 5 = 1000
//
// Total price:
// 100 + 200 + 1000 = 1300
//
// Total items:
// 1 + 2 + 5 = 8
//
// Output:
//
// Total : 8 Price: 1300