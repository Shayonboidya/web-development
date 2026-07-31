// Count Vowels


// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for(let c of str){
    if(vowels.includes(c)){
        count++;
    }
  }
 
  return count;
}
 
console.log(countVowels("javascript")); // Expected: 3
