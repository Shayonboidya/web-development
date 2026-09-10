"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
}
class Student extends User {
}
const s1 = new Student("sh", 21, "shayon11@gmail.com");
//# sourceMappingURL=inheritance.js.map