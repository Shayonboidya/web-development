function reverseNumber(num) {
    let str = num.toString();
    let rev = str.split("");
    return parseInt(rev.reverse().join(""));

}


console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));
