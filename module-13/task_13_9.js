// Long Words Above a Length, Then Their Count 

// Input: an array of words, a length threshold 
// Output: array of words longer than the threshold 
// Returns: an array 

function getWordsLongerThan(words, minLength) {
    let longWords = [];
    for (const str of words) {
        if(str.length > minLength){
            longWords.push(str);
        }
    }
    return longWords;
}

// Input: an array 
// Output: the number of elements in the array 
// Returns: a number 

function countArray(arr) {
    let count = 0;
    for (const val of arr) {
        count++;
    }

    return count;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);

console.log(longWords); // Expected: ["elephant", "hippopotamus"] 
console.log(total);     // Expected: 2 
