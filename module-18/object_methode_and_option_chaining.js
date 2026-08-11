// ============================================================
// Problem 01: Find the Most Expensive Product
// ============================================================

// The function receives an object containing
// product names and their prices.
//
// Example:
//
// {
//     pen: 20,
//     book: 450,
//     bag: 455,
//     bat: 750
// }

let getMostExpenciveProduct = (products) => {

    // --------------------------------------------------------
    // Object.keys()
    // --------------------------------------------------------
    //
    // Object.keys(products) returns an array
    // containing all property names (keys).
    //
    // Example:
    //
    // Object.keys({
    //     pen: 20,
    //     book: 450,
    //     bag: 455,
    //     bat: 750
    // });
    //
    // Result:
    //
    // ["pen", "book", "bag", "bat"]

    let keys = Object.keys(products);


    // Store the highest price found so far.
    //
    // Initially, no product has been checked,
    // so we start from 0.

    let expenCiveProcut = 0;


    // Store the name of the most expensive product.

    let expenCiveProcutName = "";


    // --------------------------------------------------------
    // Loop through all product names
    // --------------------------------------------------------

    for (const key of keys) {

        // products[key] gives us the value
        // associated with the current key.
        //
        // Example:
        //
        // key = "pen"
        // products[key] = 20
        //
        // key = "book"
        // products[key] = 450


        // Check whether the current product's price
        // is greater than the highest price found so far.

        if (expenCiveProcut < products[key]) {

            // If the current price is higher,
            // update the highest price.

            expenCiveProcut = products[key];


            // Also save the current product name.

            expenCiveProcutName = key;
        }


        // console.log(key, products[key]);
    }


    // Return the name of the most expensive product.

    return expenCiveProcutName;
};


// ------------------------------------------------------------
// Function Call
// ------------------------------------------------------------

console.log(
    getMostExpenciveProduct({
        pen: 20,
        book: 450,
        bag: 455,
        bat: 750
    })
);


// Output:
//
// bat



// ============================================================
// Problem 02: Safe Nested Access
// ============================================================

let user = {

    name: "shayon",

    address: {

        // city: "khulna"

    }
};


// The city property is intentionally missing.
//
// user.address exists,
// but user.address.city does not exist.



let safeNestedAccess = (obj) => {

    // Optional chaining:
    //
    // obj.address?.city
    //
    // JavaScript first checks whether
    // obj.address exists.
    //
    // If address exists:
    //     it tries to access city.
    //
    // If address is null or undefined:
    //     it returns undefined instead of throwing an error.

    return obj.address?.city;
};


// Call the function.

console.log(safeNestedAccess(user));


// Output:
//
// undefined