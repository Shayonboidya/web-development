"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//     name : string,
//     age : number,
//     city : string
// }
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};
const res = formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
});
console.log(res);
//# sourceMappingURL=problem_03.js.map