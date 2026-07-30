// reverse Str

function reversseString(word){
    let n = word.length;
    let rev = "";
    for(let i = n-1; i>=0;i--){
        rev += word[i];
    }
    return rev;
}



let revStr =  reversseString("name hEllo");
console.log(revStr);