class Shap{
    area():number{
        return 0;
    }
}

class Circle extends Shap{
    radiour:number;
    constructor(radious:number){
        super();
        this.radiour = radious;
    }

    area(): number {
        return 3.1416 * this.radiour * this.radiour;
    }
}

class Rectangle extends Shap{
    length:number;
    width :number;

    constructor(length:number, width:number){
        super();
        this.length = length;
        this.width = width;
    }
    area(): number {
        return this.length * this.width;
    }
}


const circle = new Circle(3);
console.log(circle.area());

const rectangle = new Rectangle(3,4);
console.log(rectangle.area());