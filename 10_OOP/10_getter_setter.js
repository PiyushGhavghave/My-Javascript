class user{
    constructor(email, password){
        this.email = email;
        this.password = password;  //overwrite ... hence it will not set any value
    }
    // name of method is same as property
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}(encrypted)`;
    }
    set password(value){
        this._password = value;
    }
}

const piyush = new user("piyush@google.com", "abcd")
console.log(piyush.email);
console.log(piyush.password);