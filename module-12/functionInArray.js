// function in array
function arrayFunction(arrays){
    console.log("Got the array is: ",arrays[0]);
    let firstElemtn = arrays[0]*2;
    return firstElemtn;

}

let numbers = [20,30,40,50,60];
let doubleOfTheFirstElement =  arrayFunction(numbers);

console.log("double Of The First Element: "+ doubleOfTheFirstElement);