let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
}; 

// conver email lowercase
contact.email = contact.email.toLowerCase();
console.log(contact.email);

// Loop through the contact object and print each key-value pair. 

for(let keyValu in contact){
    console.log(keyValu +":"+contact[keyValu]);
}


// /Add a new property favoriteWords: [] (an array) — push 3 words to it.
contact["favoriteWords"] = ["name", "age","faculty"];
console.log(contact);

// Reverse the name string just for fun using one of your three reverse functions from 
let name = contact.name.split("").reverse();
console.log(name.join(""));


// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.


if(contact.email.includes("@email.com")){
    console.log("Mail is correct");
}
else{
    console.log("mail is not correct");
}