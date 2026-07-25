
let user = {
    username: "coder123",
    address: {
        city: "Austin",
        zip: "78701"
    }
} 

// city using dot 
console.log(user.address.city);

// add a country propertis insides the address
user["address"]["country"] = "Bangladesh";
console.log(user.address);

// delete the zip

delete user["address"]["zip"];
console.log(user);