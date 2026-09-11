// console.log(new Date());

abstract class Shap {
    abstract area():number;
}

class Circle extends Shap{
    redious:number;
    constructor(redious:number){
        super();
        this.redious = redious;
    }

    area(): number {
        return 3.1416 * this.redious * this.redious;
    }
}


// const shap = new Shap();//abstruct class does not instantiate
const circle = new Circle(3);
console.log(circle.area());