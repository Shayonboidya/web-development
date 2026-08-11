let nums = [4, 5, 8, 4, 3, 2, 17, 9, 3, 3];

let decinding = (nums2) => {
    let nums = [...nums2];
    const sortNumber = nums.sort((a, b) => b - a);
    return sortNumber;
}

console.log(decinding(nums));
console.log(nums);







// problem - 02


const products = [
    {
        name: "pen",
        price: 100,
        qut: 1,
    },

    {
        name: "book",
        price: 100,
        qut: 2
    },

    {
        name: "headphone",
        price: 200,
        qut: 5
    }
];


let previewDiscount = (product) => {
    const newItem = product.map((item) => {
        console.log(item);
        return {
            ...item,
            price : item.price - (item.price * 0.1)
        }
    })
    return newItem;
}

console.log("before->", products);

console.log(previewDiscount(products));
console.log("after->", products);