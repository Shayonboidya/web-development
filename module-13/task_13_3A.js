// Product of Digits

// Input: a number
// Output: product of its digits
// Returns: a number
 
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for(let val of str){
    total *= parseInt(val);
  }
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0

