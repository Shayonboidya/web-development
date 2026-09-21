
function countWordFrequencies(sentence: string):void {
  // TODO: Implement this function
  
  let newStr :string = sentence.toLowerCase().replace(/[^a-zA-Z]/g,"");
  console.log(newStr);
}


console.log(countWordFrequencies("Hello world, hello!"));