// Parent class
class User{
    private _name: string;
    private _age: number;
    private _email :string;
    constructor (name : string, age :number, email:string){
        this._name = name;
        this._email = email;
        this._age = age;
    }

    display():void {
        console.log(this._name);
        console.log(this._age);
        console.log(this._email);
    }
}

// chiled class
class Student extends User{
    
    private _fee:number;
    constructor (name : string, age :number, email:string,fee :number){
        super(name,age,email);
        this._fee = fee;
    }
    display(): void {
        super.display();
        console.log(this._fee);
    }
}

class Teacher extends User{

}


const s1 = new Student("sh", 21, "shayon11@gmail.com",2546);
s1.display();
const t1 = new Teacher("ni", 35, "nutu@gmail.com");

