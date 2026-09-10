"use strict";
/**
 * name
 * age
 * email
 * marks
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    emal;
    mark;
    // constructor -> special type of methode
    constructor(name, age, email, mark) {
        this.name = name;
        this.age = age;
        this.emal = email;
        this.mark = mark;
    }
}
const sh = new Student("Shayon", 21, "shayon@11", 90);
console.log(sh);
const sadia = new Student("sadia", 20, "sadia@gmail.com", 89);
console.log(sadia);
console.log(sadia.emal);
//# sourceMappingURL=class.js.map