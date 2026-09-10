class Bkash_acount {
    phone :string;
    blance : number;
    pin :string;
    history:string;
    constructor(phone:string, blance : number, pin :string, history:string){
        this.phone = phone;
        this.blance = blance;
        this.pin = pin;
        this.history = history;
    }
    display():void{
        console.log(`Number: ${this.phone}`);
        console.log(`Blance: ${this.blance}`);
        console.log(`Pin: ${this.pin}`);
        console.log(`History: ${this.history}`);
    }

}
const user1 = new Bkash_acount("01936864394",2005,"2580","none");
user1.blance = 0;
user1.pin = "2333"
user1.display();