// average in array

function averageNumber(array){
    let sum = 0;
    for(let val of array){
        sum += val;
    }
    return parseInt((sum / array.length)*100)/100.00;
}


let nums = [1,2,3,4,5,6,2,9,3];

console.log(averageNumber(nums));