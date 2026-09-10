"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parent class
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    display() {
        console.log(this._name);
        console.log(this._age);
        console.log(this._email);
    }
}
// chiled class
class Student extends User {
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
    }
    display() {
        super.display();
        console.log(this._fee);
    }
}
class Teacher extends User {
}
const s1 = new Student("sh", 21, "shayon11@gmail.com", 2546);
s1.display();
const t1 = new Teacher("ni", 35, "nutu@gmail.com");
//# sourceMappingURL=inheritance.js.map