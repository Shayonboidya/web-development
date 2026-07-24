let sunglass = {
    name: "MKS",
    color: "red",
    price:120
}
let phone = {
    color: "black",
    version: 12.3,
    ifThreeCam : false,
    apps: ["fb", "insta", "wp"],
    "home address" : "Khula"
}
phone.version = 20.5;
phone["color"] = "green";
console.log(phone);
console.log(phone.apps);
console.log(phone["home address"]);