
//call() => pass current context to another function

function setUserName(username){
    this.username = username
}
function createUser(username, email, password){
    //pass context (this)
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const user1 = new createUser("Piyush","piyush@gmail.com","1633")
console.log(user1);