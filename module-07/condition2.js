// ============================================
// Logical Operators (&&, ||, !)
// ============================================

// Variables
const isRain = false;
const studentIsRady = true;


// ============================================
// Logical AND (&&)
// ============================================

// && (AND) returns true only if BOTH conditions are true.

if (isRain === true && studentIsRady !== true) {

    // This block runs only if:
    //
    // 1. It is raining.
    // AND
    // 2. The student is NOT ready.
    console.log("I can not go out.");

} else {

    // Runs when at least one condition is false.
    console.log("I can go out.");
}


// Output:
// I can go out.