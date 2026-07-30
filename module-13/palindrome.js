// chec palindrome

function checkPalidrome(word){
    let st = 0, end = word.length-1;
    let isPalindrome = true;
    while(st < end){
        if(word[st] !== word[end]){
            isPalindrome = false;
        }
        st++;
        end--;
    }
    return isPalindrome;
}

let name = "abba";
if(checkPalidrome(name)){
    console.log(name, "is palindrome");
}else{
    console.log(name, "is not palindrome");
}
