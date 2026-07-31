// Remove First and Last Character


// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
    return str.slice(1,-1);
    
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"
