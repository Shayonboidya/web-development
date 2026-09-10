"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    email;
    marks;
    constructor(name, age, email, marks) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;
    }
    getINfo() {
        console.log(`Name : ${this.name}`);
        console.log(`age : ${this.age}`);
        console.log(`email : ${this.email}`);
        console.log(`marks : ${this.marks}`);
    }
}
const sh = new Student("Shayon", 21, "shayon@11gamil.com", 90);
sh.getINfo();
//# sourceMappingURL=methode.js.map