let number = [1,2,3,4,5,5,6,7,8,9];

console.log(number);
// shift removed first elemnt
let y = number.shift();
console.log(number);
console.log("first removed number: "+y);

//add font of the element
let x = number.unshift(99);
console.log(number);
console.log("first added number is: "+x);