"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: "shayon Boidya",
    age: 21,
    id: 2402017
};
console.log(student.name);
console.log(student.age);
console.log(student.id);
const creatStudent = (name, age, id) => {
    const obj = { name, age, id };
    return obj;
};
const rafi = creatStudent("rafi", 23, 22);
console.log(rafi);
const nafisha = creatStudent("nafisha", 22, 389);
console.log(nafisha);
//# sourceMappingURL=Object.js.map