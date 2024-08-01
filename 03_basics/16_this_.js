//**************************  this => gives context of current object ****************
const user ={
    username : "Piyush",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website!`);
        console.log(this)
    }
    
}
user.welcomeMessage()  //Piyush , welcome to website!

user.username = "sam"
user.welcomeMessage()  //sam , welcome to website!

//In Node environnment 'this' refere empty object
//In browser 'this' refer to window
console.log(this);  //{}  



//--------------------------Cannot use 'this' in function
function sample(){
    let username = "Piyush"
    console.log(this.username);  //undefined
}
sample()
const chai = function(){
    console.log(this.username);  //undefined
}
chai()
const chai1 = () => {
    console.log(this);   //{}
    console.log(this.username); //undefined
}
chai1()

