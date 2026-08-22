"use strict";
const devices = {
    namePh: "iphone",
    type: "smart phone",
    price: 222,
    color: "black",
    stroge: 128
};
const { namePh, ...deviceInfo } = devices;
console.log(deviceInfo);
const numbers2 = [1, 2, 3, 4, 5];
const newNumbers3 = [...numbers2, 6, 7, 8];
const newNumbers4 = ["karim", "rahim"];
// const allNumber : number[] = [...newNumbers4 , ...numbers2];//error type not same;
const allNumber = [...newNumbers3, ...numbers2]; //error type not same;
console.log(allNumber);
