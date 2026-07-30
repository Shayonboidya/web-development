const student ={
    name: "shayon",
    age: 21,
    university: "PSTU",
    department: "CSE"
};

const keys = Object.keys(student);
// console.log(keys.join(" "));

const values = Object.values(student);
// console.log(values.join(" "));

const key_valu = Object.entries(student);
// console.log(key_valu.join(" "));


for(let key in student){
    console.log(key);
}

for(let key in student){
    console.log(student[key]);
}


for(let key in student){
    console.log(key, ":",student[key]);
}


console.log("total propertics: ", keys.length);
console.log(Object.hasOwn(student,"Email"));