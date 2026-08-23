// ============================================================
// TypeScript: Interface, Extends, Declaration Merging
// and Function Interface
// ============================================================


// ============================================================
// 1. UNION TYPE
// ============================================================

// `UserRole` can contain only one of these exact values.
//
// This is a union of string literal types.

type UserRole = "Admin" | "Moderator" | "user" | "Guest";


// ============================================================
// 2. BASE INTERFACE
// ============================================================

// `User` defines the common properties
// that every user should have.

interface User {
    name: string;
    role: UserRole;
    email: string;
}


// ============================================================
// 3. INTERFACE EXTENSION
// ============================================================

// `Admin` extends `User`.
//
// This means Admin automatically gets all properties
// from the User interface:
//
// name
// role
// email
//
// And Admin also has its own property:
//
// permission

interface Admin extends User {
    permission: string[];
}


// ============================================================
// 4. ANOTHER INTERFACE EXTENSION
// ============================================================

// `Moderator` also extends `User`.
//
// It gets:
// name
// role
// email
//
// And adds:
// moderatorSection

interface Moderator extends User {
    moderatorSection: string[];
}


// ============================================================
// 5. OBJECT USING THE ADMIN INTERFACE
// ============================================================

// `bigBoss` must satisfy both:
// 1. User
// 2. Admin
//
// Because Admin extends User.

const bigBoss: Admin = {
    name: "heool",
    role: "Admin",
    email: "afdf22@gmail.com",
    permission: ["work it", "add people"]
};


// ============================================================
// 6. TYPE ALIAS DOES NOT SUPPORT DECLARATION MERGING
// ============================================================

// A type alias cannot be declared again with the same name.
//
// Example:
//
// type Book = {
//     name: string;
// };
//
// type Book = {
//     price: number;
// };
//
// ❌ Error: Duplicate identifier 'Book'


type Book = {
    name: string;
};


// ============================================================
// 7. INTERFACE DECLARATION MERGING
// ============================================================

// Interfaces can be declared multiple times
// using the same name.
//
// TypeScript merges all declarations into one interface.

interface Gift {
    name: string;
}

interface Gift {
    price: number;
}


// After merging, Gift effectively becomes:
//
// interface Gift {
//     name: string;
//     price: number;
// }


// Therefore, both properties are required.

const bdGift: Gift = {
    name: "teddy",
    price: 2000
};


// ============================================================
// 8. INTERFACE WITH FUNCTION SIGNATURE
// ============================================================

// An interface can describe the structure of a function.
//
// This function:
// - accepts two numbers
// - returns a number
//
// `a` -> number
// `b` -> number
// return -> number

interface Add {
    (a: number, b: number): number;
}


// The `add` function must follow the Add interface.
//
// Parameters are automatically inferred as numbers.
// Return type is inferred as number.

const add: Add = (a, b) => a + b;

console.log(add(2, 4));