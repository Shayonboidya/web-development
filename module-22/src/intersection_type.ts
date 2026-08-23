// ============================================================
// TypeScript: Intersection Type
// ============================================================


// ============================================================
// 1. PERSON TYPE
// ============================================================

// `Person` describes the properties of a person.

type Person = {
    name: string;
};


// ============================================================
// 2. EMPLOYEE TYPE
// ============================================================

// `Employee` describes the properties of an employee.

type Employee = {
    salary: number;
};


// ============================================================
// 3. INTERSECTION TYPE
// ============================================================

// `&` combines multiple types into one type.
//
// Worker must contain ALL properties from:
// 1. Employee
// 2. Person
//
// So Worker will have:
// name   -> string
// salary -> number

type Worker = Employee & Person;


// ============================================================
// 4. OBJECT USING THE INTERSECTION TYPE
// ============================================================

// `worker` must satisfy both Employee and Person.
//
// Therefore, both `name` and `salary` are required.

const worker: Worker = {
    name: "joshim",
    salary: 12223
};


// Print the worker object.
console.log(worker);