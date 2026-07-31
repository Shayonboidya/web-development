//  Check for a Palindrome


// Input: a string
// Output: true or false
// Returns: a boolean
 
function isPalindrome(str) {
    let  l = 0, r = str.length-1;
    while(l < r){
        if(str[l] != str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;

}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
