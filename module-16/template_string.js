// ============================================
// Variables
// ============================================

// Store the user's name.
let name = "shayon boiyda";

// Store the user's age.
let age = 21;

// Store the price of one product.
let price = 2333.4;

// Store the quantity of products.
let quantity = 3;


// ============================================
// Template Literal
// ============================================

// Template literals use BACKTICKS (` `) instead of
// single (' ') or double (" ") quotes.
//
// Inside a template literal,
// ${} is used to insert variables or expressions.
let msg = `hello ${name}. your age is ${age}. your product price is ${price} and total price ${price * quantity}`;


// Print the complete message.
console.log(msg);

// Output:
// hello shayon boiyda. your age is 21.
// your product price is 2333.4 and total price 7000.2



// ============================================
// Multiline String
// ============================================

// Backticks (` `) allow writing a string
// across multiple lines without using \n.
`
line 1
line 2
line 3
`;

// The above string is not assigned to any variable
// and is not printed, so it has no visible effect.


// If you wanted to print it:
console.log(`
line 1
line 2
line 3
`);

// Output:
// line 1
// line 2
// line 3



// ============================================
// New Line (\n)
// ============================================

// \n means "start a new line".
console.log(`hello ${name}. your payment is successful.\nyour payment is ${price}`);

// Output:
//
// hello shayon boiyda. your payment is successful.
// your payment is 2333.4