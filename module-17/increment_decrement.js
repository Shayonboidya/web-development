// ============================================
// Increment (++) and Decrement (--)
// ============================================

// JavaScript provides two increment operators:
//
// 1. Post Increment  (x++)
// 2. Pre Increment   (++x)
//
// It also provides two decrement operators:
//
// 1. Post Decrement  (x--)
// 2. Pre Decrement   (--x)


// ============================================
// Post Increment (x++)
// ============================================

// Post increment means:
//
// 1. Use the current value first.
// 2. Then increase it by 1.

let x = 5;

// Print the current value.
// After printing, x becomes 6.
console.log(x++);

// Output:
// 5


// Now x has already increased.
console.log(x);

// Output:
// 6



// ============================================
// Post Decrement (x--)
// ============================================

// Post decrement means:
//
// 1. Use the current value first.
// 2. Then decrease it by 1.

let y = 6;

// Print the current value.
// After printing, y becomes 5.
console.log(y--);

// Output:
// 6


// The value has already decreased.
console.log(y);

// Output:
// 5



// ============================================
// Pre Increment (++x)
// ============================================

// Pre increment means:
//
// 1. Increase the value first.
// 2. Then use the updated value.

let a = 9;

// a becomes 10 first,
// then it is printed.
console.log(++a);

// Output:
// 10


// a is already 10.
console.log(a);

// Output:
// 10



// ============================================
// Another Pre Increment Example
// ============================================

let b = 12;

// b becomes 13 first,
// then it is printed.
console.log(++b);

// Output:
// 13


// b remains 13.
console.log(b);

// Output:
// 13