function countHashtags(caption) {
    // Write your code here...
    if(typeof caption !== 'string'){
        return "Invalid";
    }

    let hastag = caption.split(" ").filter((word) => word.startsWith("#"));
    let longtag = hastag.reduce((maxWord, word)=>(word.slice(1).length > maxWord.length) ? word.slice(1) : maxWord, "")
    return {
        hashtagCount : hastag.length,
        longestTag : longtag
    }
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));