
const getTicketPrice = (age:number):number =>{
    if(age <= 5) return 0;
    else if(age <= 12) return 100;
    else if(age <= 59) return 200;
    else return 120;

}


console.log(getTicketPrice(5));
console.log(getTicketPrice(10));
console.log(getTicketPrice(25));
console.log(getTicketPrice(65));