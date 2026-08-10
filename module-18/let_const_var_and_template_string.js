// ============================================
// Problem 01: Fix a Scope Bug
// ============================================

/*
The original buggy code:

var status = "order place";

for (var i = 0; i <= 3; i++) {
    var status = "posessing " + i;
    console.log(status);
}

console.log("Final status: ", status);
*/


// ============================================
// Fixed Version
// ============================================

// 'status' is declared outside the loop.
let status = "order place";


for (var i = 0; i <= 3; i++) {

    // 'let' creates a new block-scoped variable.
    //
    // This status belongs only to the loop block.
    // It does NOT modify the outer 'status'.
    let status = "posessing " + i;

    console.log(status);
}


// The outer status is still unchanged.
console.log("Final status: ", status);


// Output:
//
// posessing 0
// posessing 1
// posessing 2
// posessing 3
// Final status: order place



// ============================================
// Problem 02: Generate Receipt
// ============================================

function receveGenetor(name, price, qut) {

    // name  -> product name
    // price -> price of one item
    // qut   -> quantity
    
    // Calculate total:
    //
    // price * qut
    //
    // Template literal is used to create
    // the final receipt message.
    return `${name} x ${qut} = ${price * qut} taka`;
}


// Call the function:
//
// name  = "pen"
// price = 20
// qut   = 3
//
// Total = 20 * 3 = 60

console.log(receveGenetor("pen", 20, 3));


// Output:
// pen x 3 = 60 taka