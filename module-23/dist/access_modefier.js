"use strict";
/**
 * access modifier
 * -> public
 * ->private
 * -> protected
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Bkash_acount {
    phone;
    blance;
    pin;
    history;
    constructor(phone, blance, pin, history) {
        this.phone = phone;
        this.blance = blance;
        this.pin = pin;
        this.history = history;
    }
    get_blance(pin) {
        if (pin === this.pin) {
            return this.blance;
        }
        else {
            return "pin does not match!";
        }
    }
    display() {
        console.log(`Number: ${this.phone}`);
        console.log(`Blance: ${this.blance}`);
        console.log(`Pin: ${this.pin}`);
        console.log(`History: ${this.history}`);
    }
}
const user1 = new Bkash_acount("01936864394", 2005, "2580", "none");
// user1.blance = 0;//error
// user1.pin = "2333"//error
// user1.history = "hello"; //error
console.log(user1.get_blance("2580"));
// user1.display();
//# sourceMappingURL=access_modefier.js.map