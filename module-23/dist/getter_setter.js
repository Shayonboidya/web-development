"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _account_id;
    _account_holder_name;
    _blance;
    constructor(account_id, account_holder_name, blance) {
        this._account_holder_name = account_holder_name;
        this._account_id = account_id;
        this._blance = blance;
    }
    set account_blance(_blance) {
        if (_blance <= 0) {
            throw new Error("Blance is not correct");
        }
        this._blance += _blance;
    }
    get account_blance() {
        return this._blance;
    }
}
const user_1 = new User("123", "sh", 2000);
// console.log(user_1.account_holder_name , user_1.account_id , user_1.blance);
user_1.account_blance = 10;
user_1.account_blance = 110;
console.log(user_1.account_blance);
//# sourceMappingURL=getter_setter.js.map