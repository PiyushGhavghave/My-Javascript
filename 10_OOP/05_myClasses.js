// ------------------------- Class
class user{
    // constuctor function
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    //methods
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new user("Piyush","piyush@gmail.com","1235")
console.log(user1.encryptPassword());
console.log(user1.changeUserName());



// --------------------------- Another way (behind the scene)

// constuctor function
function NewUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
//methods
NewUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
NewUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user2 = new NewUser("Ram","ram@gmail.com","3633")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());