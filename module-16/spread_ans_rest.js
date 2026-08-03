let number = [12, 20, 39, 40, 60];

//12 20 39 40 60
// console.log(...number);


let maxNumber = Math.max(...number);
// console.log(maxNumber);//60


// copy array;
// let numbers2 = number;
// number.push(28888);//when push number also update numbers2 
// console.log(numbers2);


let numbers2 = [...number, 22, 586];
number.push(9999);//not modify numbers2 
console.log(numbers2);






let studens = {
    name: "shayon",
    age: 21,
    gpa: 3.733
}


// let studens2 = studens;
// studens.wt = 50;//when added wt in studes also added in students2

// console.log(studens2);


let studens2 = { ...studens, mark: 89 };
studens.wt = 50;//when added wt in student didnot add sudents2 

console.log(studens2);






// rest

function addSum(a, b, c, ...restNumbers) {
    console.log(restNumbers);
    let sum = 0;
    for (const x of restNumbers) {
        sum += x;
    }
    return a + b + c + sum;
}

console.log(addSum(2, 3, 34, 4, 5, 6, 67, 2, 1));