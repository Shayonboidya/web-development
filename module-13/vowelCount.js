// vowel count

function totalVowelCount(word){
    let vowels = "aeiou";
    word = word.toLowerCase();
    let cnt = 0;
    for (const ch of word) {
        if(vowels.includes(ch)){
            cnt++;
        }
    }
    return cnt;
}



let str = "Shayon Boidya";
console.log("total vowel count is: " ,totalVowelCount(str));