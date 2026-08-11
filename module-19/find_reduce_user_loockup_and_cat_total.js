// ============================================================
// Problem 01: Find User By ID
// ============================================================

// Array of user objects.

let users = [
    { id: 1, name: "karim" },
    { id: 2, name: "rohim" },
    { id: 3, name: "tohim" }
];


// ============================================================
// findUserById()
// ============================================================

// This function receives:
// 1. users -> array of users
// 2. id    -> ID we want to search for

let findUserById = (users, id) => {


    // --------------------------------------------------------
    // find()
    // --------------------------------------------------------
    //
    // find() checks each element of the array.
    //
    // When the condition becomes TRUE,
    // find() immediately returns that element.
    //
    // If no element matches,
    // find() returns undefined.

    let findUser = users.find((user) => {

        // Compare the user's ID with
        // the ID we are searching for.

        return user.id === id;
    });


    // --------------------------------------------------------
    // Ternary Operator
    // --------------------------------------------------------
    //
    // If findUser exists:
    //     return findUser
    //
    // Otherwise:
    //     return "User not found!"

    return findUser ? findUser : "User not found!";
};


// ============================================================
// Function Call
// ============================================================

console.log(findUserById(users, 2));


// Search:
// id = 2
//
// Checking:
//
// karim -> id 1 === 2 -> false
// rohim -> id 2 === 2 -> true
//
// find() stops here.
//
// Result:
//
// { id: 2, name: "rohim" }