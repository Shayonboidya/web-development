// set time out
// console.log("hello");
// console.log("hi");

// setTimeot
/*
const time =  setTimeout(() =>{
    // console.log("hi");
},1000)
*/
// clearTimeout(time);

// console.log("object");



// set interval
/*
setInterval(()=>{
    console.log("object");
},1000)*/
let cnt = 0;
const intval =  setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
    if(cnt === 10){
        clearInterval(intval);
    }
    cnt++; 
},1000);

