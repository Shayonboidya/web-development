/**
 * name 
 * age
 * email
 * marks
 */

class Student {
    name : string 
    age : number
    emal:string 
    mark : number
    // constructor -> special type of methode
    constructor(name:string, age:number, email:string, mark:number){
        this.name = name;
        this.age = age;
        this.emal = email;
        this.mark = mark;
    }
    
}

const sh = new Student("Shayon", 21,"shayon@11",90);
console.log(sh);

const sadia = new Student("sadia", 20, "sadia@gmail.com", 89);
console.log(sadia);
console.log(sadia.emal);



