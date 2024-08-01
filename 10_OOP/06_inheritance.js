class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    //overwrite constructor
    constructor(username, email, password){
        //super calls the parents constructor
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}
const teacher1 = new Teacher("Piyush","piyush@gmail.com","23437")
console.log(teacher1);
teacher1.addCourse()
teacher1.logMe()

const user1 = new User("Rakesh")
console.log(user1);
//user1.addCourse()   // does not have access
user1.logMe()



//--------------------- instanceof
console.log(teacher1 instanceof Teacher);  //true
console.log(teacher1 instanceof User);  //true