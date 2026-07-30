// count words
function isChar(ch) {
    return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'));
}

function countWords(s) {
    let n = s.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        if (isChar(s[i]) && (i === 0 || s[i - 1] === ' ')) cnt++;
    }
    return cnt;
}



let cnt = countWords("i        na          Bangladesh");
console.log(cnt);