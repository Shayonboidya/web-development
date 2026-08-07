// ============================================
// Closure
// ============================================

// Definition:
//
// A closure is created when an inner function
// remembers and can access variables from its
// outer (lexical) scope even after the outer
// function has finished executing.


// ============================================
// Example 1: Counter using Closure
// ============================================

// Create a function.
function createCounter() {

    // Local variable.
    // This variable belongs only to createCounter().
    let count = 0;

    // Return another function.
    return function () {

        // The inner function remembers 'count'
        // even after createCounter() has finished.
        return ++count;
    };
}


// Call createCounter().
//
// It returns the inner function and stores it
// inside the variable 'count'.
let count = createCounter();


// First call.
//
// count becomes 1.
console.log(count());

// Output:
// 1


// Second call.
//
// count is remembered.
//
// count becomes 2.
console.log(count());

// Output:
// 2


// Third call.
console.log(count());

// Output:
// 3


// Fourth call.
console.log(count());

// Output:
// 4


// Notice:
//
// createCounter() executed only ONE time.
//
// But the variable 'count'
// is still remembered because of the closure.



// ============================================
// Example 2: Restaurant Cash Counter
// ============================================

// Every shop gets its own cash counter.
function cashCountrer() {

    // Private variable.
    // Nobody outside the function
    // can access this variable directly.
    let amount = 0;

    // Return a function.
    return function (payable_amount = 0) {

        // Add the payment to the total.
        amount += payable_amount;

        // Return the updated total.
        return amount;
    };
}


// ============================================
// Restaurant Counter
// ============================================

// Create a new cash counter.
let resturent_cash_counter = cashCountrer();


// Customer pays 200.
console.log("restaurant", resturent_cash_counter(200));

// amount = 200

// Output:
// restaurant 200


// No payment.
//
// Default parameter = 0.
console.log("restaurant", resturent_cash_counter());

// amount = 200 + 0

// Output:
// restaurant 200



// ============================================
// Coffee Shop Counter
// ============================================

// Create another independent counter.
let coffea_shope_cash_counter = cashCountrer();


// Customer pays 120.
console.log("coffee shop", coffea_shope_cash_counter(120));

// amount = 120

// Output:
// coffee shop 120


// Customer pays 15.
console.log("coffee shop", coffea_shope_cash_counter(15));

// amount = 135

// Output:
// coffee shop 135



// ============================================
// Restaurant Again
// ============================================

// The restaurant counter still remembers
// its own amount (200).

console.log("restaurant", resturent_cash_counter(50));

// amount = 250

// Output:
// restaurant 250



// ============================================
// Juice Bar Counter
// ============================================

// Create a completely new counter.
let juicBer_cash_counter = cashCountrer();


// First customer pays 12.
console.log("juice bar", juicBer_cash_counter(12));

// amount = 12

// Output:
// juice bar 12

