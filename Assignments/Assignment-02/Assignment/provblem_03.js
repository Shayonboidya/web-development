function calculateAiCost(tokensUsed) {
    // Write your code here.
    if(!Number.isInteger(tokensUsed) || tokensUsed < 0){
        return "Invalid";
    }

    if(tokensUsed <= 500){
        return 0;
    }else{
        let rem = tokensUsed - 500;
        return Math.floor(rem / 100) * 5;
    }
}



console.log(calculateAiCost(500));
console.log(calculateAiCost(300));
console.log(calculateAiCost("300"));
console.log(calculateAiCost(599));
console.log(calculateAiCost(700));