// ============================================================
// TypeScript Enum
// ============================================================


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

enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}


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

enum WeekDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

console.log(WeekDay.Monday);    // 1
console.log(WeekDay.Tuesday);   // 2
console.log(WeekDay.Friday);    // 5


// ============================================================
// 3. STRING ENUM
// ============================================================

// String enums require explicit values.
//
// This is often easier to understand and debug
// compared to numeric enums.

enum Role {
    Admin = "Admin",
    Moderator = "Moderator",
    Guest = "Guest"
}

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


// ============================================================
// 5. ENUM TYPE AS AN OBJECT PROPERTY
// ============================================================

// We can explicitly define the role type.

interface User {
    name: string;
    role: Role;
}

const user1: User = {
    name: "Shayon",
    role: Role.Admin
};

const user2: User = {
    name: "Nitu",
    role: Role.Guest
};

console.log(user1);
console.log(user2);


// ============================================================
// 6. ENUM WITH FUNCTION
// ============================================================

// A function can accept an enum value as a parameter.

function checkRole(role: Role): string {

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

function getRoleMessage(role: Role): string {

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

enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}

interface ApiResponse {
    status: Status;
    message: string;
}

const response: ApiResponse = {
    status: Status.Success,
    message: "Data loaded successfully."
};

console.log(response);


// ============================================================
// 9. ENUM WITH HTTP-LIKE STATUS CODES
// ============================================================

// Numeric enums can also represent fixed numeric values.

enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

console.log(HttpStatus.OK);        // 200
console.log(HttpStatus.NotFound);  // 404


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