"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    return (role === 'admin' || role === 'editor') ? true : false;
};
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
// console.log(canEdit("guest"));
//# sourceMappingURL=problem_06%20copy.js.map