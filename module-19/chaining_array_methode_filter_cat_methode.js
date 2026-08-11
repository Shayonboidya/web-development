// ============================================================
// Problem: Calculate Total Price of Expensive Products
// ============================================================

// Product/cart data.

let cards = [
    { name: "pen", price: 120, qut: 1 },
    { name: "ereaser", price: 60, qut: 5 },
    { name: "book", price: 200, qut: 2 },
    { name: "paper", price: 20, qut: 14 }
];


// ============================================================
// getExpensiveItemProduct()
// ============================================================

// cards   -> array of products
// minPrice -> minimum price threshold
//
// The function calculates the total cost of products
// whose individual price is >= minPrice.

let getExpenciveItemProduct = (cards, minPrice) => {


    // ========================================================
    // Method Chaining
    // ========================================================
    //
    // 1. filter() -> select expensive products
    // 2. map()    -> calculate price × quantity
    // 3. reduce() -> calculate the final total

    let total = cards

        // ----------------------------------------------------
        // Step 1: filter()
        // ----------------------------------------------------
        //
        // Keep only products whose price is
        // greater than or equal to minPrice.

        .filter((card) => card.price >= minPrice)


        // ----------------------------------------------------
        // Step 2: map()
        // ----------------------------------------------------
        //
        // For each selected product:
        //
        // price × quantity
        //
        // Example:
        // pen -> 120 × 1 = 120
        // book -> 200 × 2 = 400

        .map((product) => product.price * product.qut)


        // ----------------------------------------------------
        // Step 3: reduce()
        // ----------------------------------------------------
        //
        // Add all calculated product totals together.
        //
        // Initial accumulator = 0

        .reduce((acc, val) => acc + val, 0);


    // Return the final total.

    return total;
};


// ============================================================
// Function Call
// ============================================================

console.log(getExpenciveItemProduct(cards, 120));