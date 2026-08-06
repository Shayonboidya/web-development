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









// ============================================
// Closure Interview Questions
// ============================================


/*
Q1. Closure কী? (এক লাইনে)

Ans:
Closure হলো এমন একটি feature যেখানে একটি inner function
তার outer (lexical) scope-এর variables মনে রাখতে পারে এবং
outer function শেষ হওয়ার পরেও সেই variables access করতে পারে.
*/


/*
Q2. Closure আর Normal Function এর পার্থক্য কী?

Ans:

Normal Function:
- Outer function শেষ হলে তার local variables নষ্ট হয়ে যায়।
- Local variables পরে access করা যায় না।

Closure:
- Inner function outer function-এর variables মনে রাখে।
- Outer function শেষ হলেও সেই variables ব্যবহার করতে পারে।

Example:

function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

এখানে count variable createCounter() শেষ হওয়ার পরেও
মনে রাখা হয়েছে। এটাই Closure.
*/


/*
Q3. Closure দিয়ে private variable কীভাবে বানাবেন?

Ans:

Closure ব্যবহার করে variable কে বাইরের code থেকে
hide (private) রাখা যায়।

Example:

function cashCounter() {

    let amount = 0; // private variable

    return function(pay = 0){
        amount += pay;
        return amount;
    };
}

const shop = cashCounter();

shop(100); // 100
shop(50);  // 150

console.log(amount);

Output:
ReferenceError

কারণ amount শুধুমাত্র cashCounter() এর ভিতরে থাকে।
এটি বাইরের code থেকে access করা যায় না।
*/


/*
Q4. Loop এ var ব্যবহার করলে setTimeout ভুল output দেয় কেন?

Ans:

কারণ var function-scoped।

Loop শেষ হওয়ার পর সব callback একই variable share করে।

Example:

for(var i = 1; i <= 3; i++){

    setTimeout(()=>{
        console.log(i);
    },1000);

}

Output:

4
4
4

কারণ loop শেষ হওয়ার পর i = 4 হয়ে যায়।
সব callback একই i variable ব্যবহার করে।


সমাধান:

let ব্যবহার করলে প্রতিটি iteration-এর জন্য
নতুন variable তৈরি হয়।

for(let i = 1; i <= 3; i++){

    setTimeout(()=>{
        console.log(i);
    },1000);

}

Output:

1
2
3
*/


/*
Q5. Closure কি Memory Leak তৈরি করতে পারে? কেন?

Ans:

হ্যাঁ, পারে।

কারণ Closure outer function-এর variables memory-তে
ধরে রাখে যতক্ষণ inner function-এর reference থাকে।

যদি অনেক বড় object বা unnecessary data closure-এর
ভিতরে ধরে রাখা হয় এবং reference remove না করা হয়,
তাহলে memory release হয় না।

এতে memory leak হওয়ার সম্ভাবনা থাকে।

তবে সাধারণভাবে Closure নিজে memory leak নয়।
অপ্রয়োজনীয় reference ধরে রাখলে memory leak হতে পারে।
*/