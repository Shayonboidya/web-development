// vowel count

function totalVowelCount(word){
    let vowels = "aeiou";
    let cnt = 0;
    for (const ch of word) {
        if(vowels.includes(ch)){
            cnt++;
        }
    }
    return cnt;
}
