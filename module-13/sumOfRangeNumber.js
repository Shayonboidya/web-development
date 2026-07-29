// sum of n_th number
function rangeSumOfNumber(n){
    let sum = 0;
    for(let i = 1; i <= n;i++){
        sum += i;
    }
    return sum;
}


let num = 8;
console.log("sum of number is :", rangeSumOfNumber(num));