"use strict";
// ============================================================
// TypeScript: Type Alias, Union Type, Literal Type
// and Optional Properties
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// 3. OBJECT USING THE STUDENT TYPE
// ============================================================
// `robin` must follow the Student type.
//
// name, roll, and dep are required.
// cgpa and gender are optional.
const robin = {
    name: "robin",
    roll: 2,
    dep: "phy",
    cgpa: 3.4
};
console.log(robin);
// ============================================================
// 4. ANOTHER STUDENT OBJECT
// ============================================================
// `jobin` also follows the Student type.
//
// The optional properties `cgpa` and `gender`
// do not have to be provided.
const jobin = {
    name: "jobin",
    roll: 4,
    dep: "computer science"
};
console.log(jobin);
//# sourceMappingURL=cunstomes_type.js.map