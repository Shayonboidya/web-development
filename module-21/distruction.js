"use strict";
// object
const user = {
    nameOf: "shayon Boidya",
    age: 22,
    isStudent: true
};
const { nameOf, age, isStudent } = user;
// array
const userInfo = ["karim", "rahim", "drim", "morim"];
// const [na1, na2, na3, na4] = userInfo;
const [na1, na2, , na4] = userInfo;
console.log(na1, na2, na4);
