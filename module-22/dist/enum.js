"use strict";
// ============================================================
// TypeScript Enum
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// 1. NUMERIC ENUM
// ============================================================
// By default, enum values start from 0
// and increase by 1 automatically.
//
// sunday    -> 0
// monday    -> 1
// tuesday   -> 2
// wednesday -> 3
// thursday  -> 4
// friday    -> 5
// saturday  -> 6
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
// `offDay` stores the enum value of Friday.
//
// Day.Friday = 5
const offDay = Day.Friday;
console.log(offDay); // 5
// Monday = 1
console.log(Day.Monday); // 1
// ============================================================
// 2. CUSTOM NUMERIC ENUM VALUES
// ============================================================
// You can manually define the starting value.
//
// After `Monday = 1`, the following values
// will automatically increase by 1.
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
})(WeekDay || (WeekDay = {}));
console.log(WeekDay.Monday); // 1
console.log(WeekDay.Tuesday); // 2
console.log(WeekDay.Friday); // 5
// ============================================================
// 3. STRING ENUM
// ============================================================
// String enums require explicit values.
//
// This is often easier to understand and debug
// compared to numeric enums.
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Moderator"] = "Moderator";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
console.log(Role.Admin); // "Admin"
// ============================================================
// 4. USING ENUM INSIDE AN OBJECT
// ============================================================
// The `role` property must contain a value from the Role enum.
const nandu = {
    name: "hello",
    role: Role.Admin
};
console.log(nandu);
const user1 = {
    name: "Shayon",
    role: Role.Admin
};
const user2 = {
    name: "Nitu",
    role: Role.Guest
};
console.log(user1);
console.log(user2);
// ============================================================
// 6. ENUM WITH FUNCTION
// ============================================================
// A function can accept an enum value as a parameter.
function checkRole(role) {
    if (role === Role.Admin) {
        return "Full access";
    }
    if (role === Role.Moderator) {
        return "Moderate access";
    }
    return "Guest access";
}
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.Guest));
// ============================================================
// 7. ENUM WITH SWITCH
// ============================================================
// Enums work very well with switch statements.
function getRoleMessage(role) {
    switch (role) {
        case Role.Admin:
            return "Admin has full access.";
        case Role.Moderator:
            return "Moderator can manage content.";
        case Role.Guest:
            return "Guest has limited access.";
        default:
            return "Unknown role.";
    }
}
console.log(getRoleMessage(Role.Admin));
console.log(getRoleMessage(Role.Moderator));
console.log(getRoleMessage(Role.Guest));
// ============================================================
// 8. ENUM WITH API STATUS
// ============================================================
// Enums are useful for representing a fixed set
// of application states.
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
const response = {
    status: Status.Success,
    message: "Data loaded successfully."
};
console.log(response);
// ============================================================
// 9. ENUM WITH HTTP-LIKE STATUS CODES
// ============================================================
// Numeric enums can also represent fixed numeric values.
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus.OK); // 200
console.log(HttpStatus.NotFound); // 404
// ============================================================
// 10. REVERSE MAPPING IN NUMERIC ENUM
// ============================================================
// Numeric enums support reverse mapping.
//
// Value -> Name
console.log(Day[0]); // "Sunday"
console.log(Day[5]); // "Friday"
// Name -> Value
console.log(Day.Sunday); // 0
console.log(Day.Friday); // 5
//# sourceMappingURL=enum.js.map