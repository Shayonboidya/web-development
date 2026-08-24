interface Product {
    name: string,
    price: number
}

const calculateCartTotal = (products:Product[]):number => {
    if(products.length === 0) return 0;
    let cost:number = products.reduce((ecu, valu) => ecu + valu.price,0);
    return cost;
}

const products = [ 
    { name: "Keyboard", price: 1500 }, 
    { name: "Mouse", price: 800 }, 
    { name: "USB Cable", price: 300 } 
]; 

console.log(calculateCartTotal(products));

const products2 = [ 
{ name: "Book", price: 500 }, 
{ name: "Pen", price: 50 }, 
{ name: "Bag", price: 1200 } 
]; 

console.log(calculateCartTotal(products2));