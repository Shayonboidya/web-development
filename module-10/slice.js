let numbers = [1,2,3,4,5,6,7];

let slice = numbers.slice(2,4);//starting point 2 index to 3 index return
console.log(slice);
console.log(numbers);
/*splice() is one of the most important array methods in JavaScript. It changes the original array by adding, removing, or replacing elements.*/

let part = numbers.splice(2,5,7777,999);
console.log(part);
console.log(numbers);

