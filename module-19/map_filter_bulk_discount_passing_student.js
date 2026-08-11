// ============================================================
// Problem 01: Apply Discount to Every Price
// ============================================================

// Original array of prices.
let prices = [500, 1000, 250];

// Discount rate = 10%
let rate = 10;


// ============================================================
// discountEveryPrice()
// ============================================================

// This function:
// 1. Takes an array of prices.
// 2. Takes a discount rate.
// 3. Applies the discount to every price.
// 4. Returns a NEW array.
//
// rate = 0 is a default parameter.
//
// If we don't provide the rate,
// JavaScript will automatically use 0%.

let discountEveryPrice = (prices, rate = 0) => {


    // --------------------------------------------------------
    // map()
    // --------------------------------------------------------
    //
    // map() works on every element of the array.
    //
    // It creates a NEW array.
    //
    // The original prices array is not changed.

    let modifyNewArray = prices.map((price) => {

        // 'price' represents the current element.
        //
        // First calculate the discount amount:
        //
        // price * (rate / 100)
        //
        // Then subtract the discount from the price.

        return price - (price * (rate / 100));
    });


    // Return the new discounted array.

    return modifyNewArray;
};


// ============================================================
// Function Call 01
// ============================================================

console.log(discountEveryPrice(prices, rate));


// prices = [500, 1000, 250]
// rate = 10
//
// 500  - 10% = 450
// 1000 - 10% = 900
// 250  - 10% = 225
//
// Output:
//
// [450, 900, 225]



// ============================================================
// Function Call 02
// ============================================================

// Here we don't provide the rate.
//
// Therefore:
// rate = 0

console.log(discountEveryPrice(prices));


// Calculation:
//
// 500  - 0% = 500
// 1000 - 0% = 1000
// 250  - 0% = 250
//
// Output:
//
// [500, 1000, 250]



// ============================================================
// Check Original Array
// ============================================================

console.log(prices);


// Output:
//
// [500, 1000, 250]
//
// The original array is unchanged because
// map() creates a new array.



// ============================================================
// Problem 02: Find Passing Students
// ============================================================

// Array of student objects.

let studentsInfo = [
    { name: "shayon", mark: 89 },
    { name: "rifat", mark: 29 },
    { name: "nisht", mark: 45 }
];


// ============================================================
// getPassingStudent()
// ============================================================

// This function:
// 1. Receives the student array.
// 2. Receives a passing threshold.
// 3. Returns students whose marks
//    are greater than or equal to the threshold.
//
// threhold = 0 means:
// if no threshold is provided,
// every student with mark >= 0 will pass.

let getPassingStudent = (students, threhold = 0) => {


    // --------------------------------------------------------
    // filter()
    // --------------------------------------------------------
    //
    // filter() checks every student.
    //
    // If the callback returns true:
    //     student is included.
    //
    // If the callback returns false:
    //     student is excluded.
    //
    // filter() returns a NEW array.

    let filterStudent = students.filter((student) => {

        // Check the student's mark.
        //
        // If:
        //
        // student.mark >= threhold
        //
        // is true, the student is included.

        return student.mark >= threhold;
    });


    // Return the filtered array.

    return filterStudent;
};


// ============================================================
// Function Call
// ============================================================

console.log(getPassingStudent(studentsInfo, 40));


// Threshold = 40
//
// Student 1:
// Shayon -> 89 >= 40 -> true ✅
//
// Student 2:
// Rifat -> 29 >= 40 -> false ❌
//
// Student 3:
// Nisht -> 45 >= 40 -> true ✅
//
// Therefore the result is:
//
// [
//     { name: "shayon", mark: 89 },
//     { name: "nisht", mark: 45 }
// ]