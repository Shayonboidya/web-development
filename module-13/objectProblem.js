let monitor = {
    color: "red",
    size:"12'",
    brand:"LG",
    display:"OLED"
}

for(let key in monitor){
    // console.log(key);
}


let keys = Object.keys(monitor);
for(let key of keys){
    console.log(key,":",monitor[key]);

}