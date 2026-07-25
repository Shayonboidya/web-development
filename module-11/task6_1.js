let car = { brand: "Toyota", model: "Corolla", year: 2022 }; 
// brand
console.log(car.brand);
// model
console.log(car["model"]);
// change color

car["color"] = "blue";

console.log(car);

// update year
car["year"] = 2023;
console.log(car)