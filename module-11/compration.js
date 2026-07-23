
let sub = "Chemistry";
let book = "chemistry";
// convert to lowercase
if(sub.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log("They are same.");
}
else{
    console.log("They are not same");
}



let userGivenEmail = "Shayonboidya11@gmail.com     ";
let databaseEmail = "shayonboidya11@gmail.com";

if(userGivenEmail.trimEnd().toLocaleLowerCase() === databaseEmail){
    console.log("matching....................");
}
else{
    console.log("Did not matcing .............");
}