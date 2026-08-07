// ============================================
// Array Methods
// map(), forEach(), filter(), find()
// ============================================

// These methods are commonly used to work with arrays.
//
// map()     -> Modifies every element and returns a NEW array.
// forEach() -> Executes a function for every element.
//              Returns undefined.
// filter()  -> Returns a NEW array containing only
//              the elements that satisfy a condition.
// find()    -> Returns the FIRST matching element.
//              If no match is found, it returns undefined.



// ============================================
// map()
// ============================================

// Original array.
let numbers = [10, 203, 4, 40, 9];

// Multiply every element by 2.
//
// map() creates a new array.
// The original array remains unchanged.
let modifyNumber = numbers.map((elem) => elem * 2);

// console.log(modifyNumber);

// Output:
// [20, 406, 8, 80, 18]

// console.log(numbers);

// Output:
// [10, 203, 4, 40, 9]



// ============================================
// forEach()
// ============================================

// Original array.
let rolls = [1, 2, 3, 4, 4, 7, 8, 9];

// forEach() executes once for every element.
//
// Parameters:
//
// elem -> current element
// idx  -> current index
// arr  -> original array
rolls.forEach((elem, idx, arr) => {

    // console.log(elem, idx, arr);

});

// Example Output:
//
// 1 0 [1,2,3,4,4,7,8,9]
// 2 1 [1,2,3,4,4,7,8,9]
// 3 2 [1,2,3,4,4,7,8,9]
// ...

// forEach() always returns undefined.



// ============================================
// filter()
// ============================================

// Original array.
let numbers2 = [100, 220, 120, 145, 885, 44, 223];

// Keep only values greater than or equal to 400.
let expencive_product = numbers2.filter((elem) => elem >= 400);

// console.log(expencive_product);

// Output:
// [885]

// Original array is unchanged.



// ============================================
// find()
// ============================================

// Original array.
let prices = [121, 200, 500, 152, 125, 128, 445, 447];

// find() returns only the FIRST matching element.
let best_price = prices.find((element) => element >= 210);

console.log(best_price);

// Output:
// 500

// Although 445 and 447 also satisfy the condition,
// find() stops after returning the first match.



// ============================================
// Array of Objects
// ============================================

// Each element of the array is an object.
let phones = [

    {
        model: "i phone 11",
        price: 24000
    },

    {
        model: "i phone 15",
        price: 124000
    },

    {
        model: "i phone 15 pro",
        price: 148000
    },

    {
        model: "i phone 16",
        price: 67000
    },

    {
        model: "i phone 16 pro max",
        price: 167000
    },

    {
        model: "i phone 17 pro max",
        price: 178000
    },

    {
        model: "Tecno c4",
        price: 18000
    },

    {
        model: "samsang",
        price: 19000
    }

];



// ============================================
// filter() with Objects
// ============================================

// Find all expensive phones.
//
// Condition:
// price >= 50000
//
// filter() returns ALL matching objects.
let expencive = phones.filter((phone) => phone.price >= 50000);

console.log(expencive);

/*
Output:

[
  { model: 'i phone 15', price: 124000 },
  { model: 'i phone 15 pro', price: 148000 },
  { model: 'i phone 16', price: 67000 },
  { model: 'i phone 16 pro max', price: 167000 },
  { model: 'i phone 17 pro max', price: 178000 }
]
*/



// ============================================
// find() with Objects
// ============================================

// Find the first phone
// whose price is less than or equal to 20000.
//
// find() returns ONLY the first matching object.
let cheapest_phone = phones.find((phone) => phone.price <= 20000);

console.log(cheapest_phone);

/*
Output:

{
   model: "Tecno c4",
   price: 18000
}
*/

// Even though Samsung (19000)
// also satisfies the condition,
// find() stops after finding Tecno c4.