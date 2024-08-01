// static properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    //static => does not give access to object created
    static createID(){
        return '1234'
    }
}
const piyush = new User("Piyush")
console.log(piyush);
piyush.logMe()
//console.log(piyush.createID());   //does not have access

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const teacher1 = new Teacher("Aditya","A@gmail.com")
console.log(teacher1);
teacher1.logMe()
//console.log(teacher1.createID());   //does not have access

