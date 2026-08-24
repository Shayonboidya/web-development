"use strict";
// ============================================================
// TypeScript: Interface, Extends, Declaration Merging
// and Function Interface
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// 5. OBJECT USING THE ADMIN INTERFACE
// ============================================================
// `bigBoss` must satisfy both:
// 1. User
// 2. Admin
//
// Because Admin extends User.
const bigBoss = {
    name: "heool",
    role: "Admin",
    email: "afdf22@gmail.com",
    permission: ["work it", "add people"]
};
// After merging, Gift effectively becomes:
//
// interface Gift {
//     name: string;
//     price: number;
// }
// Therefore, both properties are required.
const bdGift = {
    name: "teddy",
    price: 2000
};
// The `add` function must follow the Add interface.
//
// Parameters are automatically inferred as numbers.
// Return type is inferred as number.
const add = (a, b) => a + b;
console.log(add(2, 4));
//# sourceMappingURL=interface2.js.map