class Student {
    name : string;
    age : number;
    email :string;
    marks : number;

    constructor(name: string, age :number, email:string, marks:number) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;
    }

    getINfo():void {
        console.log(`Name : ${this.name}`);
        console.log(`age : ${this.age}`);
        console.log(`email : ${this.email}`);
        console.log(`marks : ${this.marks}`);
    }
    
}

const sh = new Student("Shayon", 21,"shayon@11gamil.com",90);
sh.getINfo();