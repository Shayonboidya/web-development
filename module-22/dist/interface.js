"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee1 = [
    {
        name: "shayon",
        selary: 12200,
        id: 102,
        dep: "softere engg."
    }, {
        name: "karim",
        id: 452,
        dep: "desigener"
    }
];
function printEmployee(employee) {
    console.log(`Name : ${employee.name}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Deperment : ${employee.dep}`);
    console.log(`selary : ${employee.selary}`);
}
printEmployee({ name: "Elon Musk", id: 202, dep: "SpaceX" });
function printEmployeeDetels({ name, id, dep }) {
    console.log(`Name : ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Deperment : ${dep}`);
    // console.log(`selary : ${selary}`);
}
printEmployeeDetels({ name: "Elon muck", id: 102, dep: "space X" });
// printEmployeeDetels()
//# sourceMappingURL=interface.js.map