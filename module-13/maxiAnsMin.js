// maximum and minimum in array
// maximum
function maximumElement(array){
    let max = array[0];
    for(let i = 1; i < array.length;i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}


// minimun
function minimumElement(array){
    let min = array[0];
    for(let i = 1; i < array.length;i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}







let nums = [1,2,3,4,5,6,2,9,3];

console.log(maximumElement(nums));
console.log(minimumElement(nums));