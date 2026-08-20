function bonusScore(scores) {
    // Write your code here
    if(!Array.isArray(scores) || scores.length === 0){
        return "Invalid";
    }
    for (const item of scores) {
        if(typeof item !== 'number') return "Invalid";
    }
    let withBonusMark = scores.map((score) => score + 10)
    let total = withBonusMark.reduce((accu, val)=>accu + val);
    return total;
}

console.log(bonusScore([80,65,90,75]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80,"90",70]));