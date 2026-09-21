function titleCaseSentence(str: string): string {
  // TODO: Implement this function
    let res :string = "";
    let array_str :string[] = str.trim().split(/\s+/);
    let simplify_str:string[] = array_str.map((element) =>{
        let newstr:string = element.slice(1).toLowerCase();
        return element[0]?.toUpperCase() + newstr;
    })
    return simplify_str.join(" ");

}

console.log(titleCaseSentence("                   Hello              woRld"));
console.log(titleCaseSentence("a short sentence                   "));
console.log(titleCaseSentence("                  "));