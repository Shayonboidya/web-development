// ============================================================
// Closure Example: Life Counter
// ============================================================

// createLifeCounter() creates a private 'lives' variable
// and returns an inner function.
//
// The inner function remembers and can access 'lives'
// even after createLifeCounter() has finished executing.

const createLifeCounter = () => {

    // This variable is private to this particular counter.
    let lives = 3;


    // Return an inner function.
    return () => {

        // If lives becomes 0,
        // stop decreasing the value.
        if (lives === 0) {
            return `You can not late submitted`;
        }


        // Decrease lives by 1 and return
        // the updated value.
        return --lives;
    };
};


// ============================================================
// Rahim's Life Counter
// ============================================================

// createLifeCounter() creates a new closure.
//
// Rahim gets his own independent 'lives' variable.
//
// Initially:
// lives = 3

let rahimLives = createLifeCounter();

console.log(rahimLives());

// lives: 3 → 2
// Output: 2



// ============================================================
// Karim's Life Counter
// ============================================================

// createLifeCounter() is called again.
//
// A completely NEW 'lives' variable is created.
//
// Initially:
// lives = 3

let karimLives = createLifeCounter();


// First call:
// lives: 3 → 2

console.log(karimLives());
// Output: 2


// Second call:
// lives: 2 → 1

console.log(karimLives());
// Output: 1


// Third call:
// lives: 1 → 0

console.log(karimLives());
// Output: 0


// Fourth call:
// lives is already 0.
//
// Therefore the if condition runs.

console.log(karimLives());
// Output:
// You can not late submitted