function findEvenOdd(n){
    if(n % 2 === 0){
        return"number is even";
    }else{
        return"number is odd";
    }
}

let num = 10;
console.log(findEvenOdd(num));