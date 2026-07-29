// find eve odd
function findEvenOdd(array) {
    for (let num of array) {
        if (num % 2 == 0) {
            console.log("It is a even number", num);
        } else {
            console.log("It is a odd number", num);
        }
    }
}


let numbes = [1, 2, 3, 4, 5, 6, 3, 5];
findEvenOdd(numbes);
