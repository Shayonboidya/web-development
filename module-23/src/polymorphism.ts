class Animal{
    private _name:string;

    constructor(name:string){
        this._name = name;
    }

    makeSound():void{
        console.log("Animal make sound......");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat make mue mue.......");
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Dog make whoof whoof.......");
    }
}

const cat1 = new Cat("Raj");
cat1.makeSound();

const dog1 = new Dog("Cuk");
dog1.makeSound();