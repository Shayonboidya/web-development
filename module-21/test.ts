// ============================================================
// TypeScript: Type Inference
// ============================================================


// ============================================================
// 1. STRING TYPE INFERENCE
// ============================================================

// TypeScript automatically infers the type from the assigned value.
//
// Since "laptops" is a string,
// TypeScript infers:
// products → string

let products = "laptops";

console.log(products);


// Since products has been inferred as a string,
// assigning a number will cause a TypeScript error.

// products = 100;
// ❌ Error: Type 'number' is not assignable to type 'string'


// You can assign another string value:

products = "mobile"; // ✅
products = "keyboard"; // ✅


// ============================================================
// 2. BOOLEAN TYPE INFERENCE
// ============================================================

// TypeScript automatically infers the type as boolean.
//
// true is a boolean value,
// so:
// bollen → boolean

let bollen = true;

console.log(bollen);


// Since bollen is inferred as boolean,
// only true or false can be assigned.

// bollen = false; // ✅
// bollen = "true"; // ❌ Error
// bollen = 100;    // ❌ Error


// ============================================================
// 3. TYPE INFERENCE VS TYPE ANNOTATION
// ============================================================

// Type Annotation:
// We explicitly tell TypeScript the type.

let productName: string = "laptop";


// Type Inference:
// TypeScript automatically determines the type.

let product2 = "laptop";


// In both cases, TypeScript knows that the value is a string.
//
// productName → string
// product     → string


// ============================================================
// 4. WATCH MODE
// ============================================================

// Normally, TypeScript can compile a file like this:
//
// tsc fileName.ts
//
// Example:
//
// tsc app.ts
//
// This compiles:
// app.ts → app.js


// ------------------------------------------------------------
// Watch Mode
// ------------------------------------------------------------

// Watch mode continuously monitors the TypeScript file.
//
// Whenever you save changes,
// TypeScript automatically recompiles the file.
//
// Command:
//
// tsc fileName.ts --watch
//
// Short version:
//
// tsc fileName.ts -w


// Example:
//
// tsc app.ts --watch
//
// Now, whenever you modify and save app.ts,
// TypeScript automatically compiles the changes.