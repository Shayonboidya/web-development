// ============================================================
// TypeScript: Type Alias, Union Type, Literal Type
// and Optional Properties
// ============================================================


// ============================================================
// 1. UNION TYPE + LITERAL TYPE
// ============================================================

// `Gender` is a type alias.
//
// It can contain only one of these three exact string values:
//
// "male"
// "female"
// "private"

type Gender = "male" | "female" | "private";


// ============================================================
// 2. TYPE ALIAS FOR AN OBJECT
// ============================================================

// `Student` is a reusable type alias for a student object.
//
// Required properties:
// name   -> string
// roll   -> number
// dep    -> string
//
// Optional properties:
// cgpa   -> number
// gender -> Gender

type Student = {
    name: string;
    roll: number;
    dep: string;
    cgpa?: number;   // Optional property
    gender?: Gender; // Optional property
};


// ============================================================
// 3. OBJECT USING THE STUDENT TYPE
// ============================================================

// `robin` must follow the Student type.
//
// name, roll, and dep are required.
// cgpa and gender are optional.

const robin: Student = {
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

const jobin: Student = {
    name: "jobin",
    roll: 4,
    dep: "computer science"
};

console.log(jobin);