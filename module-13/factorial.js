// calculate factorial

function calculateFractorial(n){
    let fact = 1;
    for(let i = 1;i <= n;i++){
        fact *= i;
    }
    return fact;
}

console.log(calculateFractorial(5));
console.log(calculateFractorial(2));