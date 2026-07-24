const Preson = {
    name : "shayon Boidya",
    age : 21,
    status : "unmaried",
    isSingle : true

}
console.log(Preson);

//all keys array
const allKey = Object.keys(Preson);
console.log(allKey);
// all valus array
const allValu = Object.values(Preson);
console.log(allValu);

// delete keyword
delete Preson.isSingle;
console.log(Preson)

// key vhalu pair
const keyValuPair = Object.entries(Preson);