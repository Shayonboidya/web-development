let number = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

console.log(number.includes(8));//is find the numer in array

console.log(number.includes(99)); //not found 99 in the array so retuen false


let n1 = [1, 2, 3];
let n2 = [5, 6, 7];
let number1and2 = n1.concat(n2);
console.log(number1and2);

// joined array
let num = [1, 2, 3, 4, 5, 6, 7];

console.log(num.join(''));

//position
console.log(num.indexOf(3)); //given index nuumber
console.log(num.indexOf(99));//return -1 because, does not exit 99 int the array

// chake array

console.log(Array.isArray(num))// return true
