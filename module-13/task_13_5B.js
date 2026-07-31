// Find the Shortest Word in a Sentence

// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
    for (let val of words) {
        if (shortest.length > val.length) {
            shortest = val;
        }
    }
    return shortest;
}

console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"
