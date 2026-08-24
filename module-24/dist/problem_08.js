"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    if (patient.emergencyLevel === 1) {
        return "Critical emergency";
    }
    if (patient.emergencyLevel === 2) {
        return "Serious";
    }
    return "Moderate emergency";
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
console.log(getPatientStatus({
    name: "Karim", age: 60, type: "emergency",
    emergencyLevel: 1
}));
console.log(getPatientStatus({
    name: "Hasan", age: 45, type: "emergency",
    emergencyLevel: 3
}));
//# sourceMappingURL=problem_08.js.map