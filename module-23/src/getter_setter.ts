class User {
    private _account_id: string;
    private _account_holder_name :string;
    private _blance :number;

    constructor(account_id:string, account_holder_name:string, blance:number){
        this._account_holder_name = account_holder_name;
        this._account_id = account_id;
        this._blance = blance;
    }
    set account_blance(_blance:number){
        if(_blance <= 0){
            throw new Error("Blance is not correct");
        }
        this._blance += _blance;
    }

    get account_blance():number{
        return this._blance;
    }

}


const user_1 = new User("123", "sh", 2000);
// console.log(user_1.account_holder_name , user_1.account_id , user_1.blance);
user_1.account_blance = 10;
user_1.account_blance = 110;
console.log(user_1.account_blance);