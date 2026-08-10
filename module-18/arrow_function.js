// ============================================
// Problem 01
// Calculate Shipping Fee
// ============================================

// calculateShipping() takes two parameters:
//
// amount     -> product/order amount
// shippingFee -> shipping charge
//
// Default parameter:
// If shippingFee is not provided,
// JavaScript automatically uses 60.
let calculateShipping = (amount, shippingFee = 60) => {

    // Ternary operator:
    //
    // condition ? value_if_true : value_if_false
    //
    // If amount >= 1000:
    //     return "free shipping"
    //
    // Otherwise:
    //     return the shipping fee.
    return (amount >= 1000)
        ? "free shipping"
        : `shipping fee : ${shippingFee} taka`;
};


// amount = 122
//
// 122 >= 1000 -> false
//
// shippingFee was not provided,
// so default value = 60.
console.log(calculateShipping(122));

// Output:
// shipping fee : 60 taka


// amount = 1220
//
// 1220 >= 1000 -> true
//
// Therefore, free shipping.
console.log(calculateShipping(1220));

// Output:
// free shipping


// amount = 122
// shippingFee = 1000
//
// 122 >= 1000 -> false
//
// Since shippingFee was provided,
// default value 60 is NOT used.
console.log(calculateShipping(122, 1000));

// Output:
// shipping fee : 1000 taka



// ============================================
// Problem 02
// Calculate Grade
// ============================================

let getGrad = (mark) => {

    // Check whether mark is a number.
    //
    // typeof returns the data type of mark.
    //
    // If mark is NOT a number,
    // return "Invalid".
    if (typeof mark != "number") {
        return "Invalid";
    }


    // Nested ternary operator.
    //
    // First check:
    // mark >= 90
    //      ↓
    //      A+
    //
    // Otherwise check:
    // mark >= 80
    //      ↓
    //      A
    //
    // Otherwise check:
    // mark >= 60
    //      ↓
    //      B+
    //
    // Otherwise:
    //      fail

    return (typeof mark != "number")
        ? "Invalid"
        : (mark >= 90)
            ? "A+"
            : (mark >= 80)
                ? "A"
                : (mark >= 60)
                    ? "B+"
                    : "fail";
};


// 98 >= 90
//
// Output:
// A+
console.log(getGrad(98));


// 80 >= 90 -> false
// 80 >= 80 -> true
//
// Output:
// A
console.log(getGrad(80));


// 70 >= 90 -> false
// 70 >= 80 -> false
// 70 >= 60 -> true
//
// Output:
// B+
console.log(getGrad(70));


// 15 >= 90 -> false
// 15 >= 80 -> false
// 15 >= 60 -> false
//
// Output:
// fail
console.log(getGrad(15));


// "15" is a string, not a number.
//
// typeof "15" -> "string"
//
// Therefore:
// Invalid
console.log(getGrad("15"));