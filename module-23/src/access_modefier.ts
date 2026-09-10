/**
 * access modifier
 * -> public
 * ->private
 * -> protected
 */

class Bkash_acount {
    public phone :string;
    private blance : number;
    private pin :string;
    protected history:string;
    constructor(phone:string, blance : number, pin :string, history:string){
        this.phone = phone;
        this.blance = blance;
        this.pin = pin;
        this.history = history;
    }
    get_blance(pin : string):number|string{
        if(pin === this.pin){
            return this.blance;
        }else {
            return "pin does not match!";
        }
    }
    display():void{
        console.log(`Number: ${this.phone}`);
        console.log(`Blance: ${this.blance}`);
        console.log(`Pin: ${this.pin}`);
        console.log(`History: ${this.history}`);
    }

}
const user1 = new Bkash_acount("01936864394",2005,"2580","none");
// user1.blance = 0;//error
// user1.pin = "2333"//error
// user1.history = "hello"; //error
console.log(user1.get_blance("2580"));
// user1.display();