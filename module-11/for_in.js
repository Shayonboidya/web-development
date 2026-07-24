const numbers = [10,30,40,50,60];

console.log(numbers);
for(let number of numbers){
    console.log(number);
}


const student = {
    name : "Shayon Boidya",
    id : 240217,
    subject : ["math", "chemistry", "physics"]
}
// for ................. of -> array
// for ................. in -> odject
for(const key in student){
    // console.log(key); //print all key
    console.log(student[key])
}