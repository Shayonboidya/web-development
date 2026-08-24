let val:unknown = "Hello typescript";
console.log((val as string).length);

console.log((<string>val).length);