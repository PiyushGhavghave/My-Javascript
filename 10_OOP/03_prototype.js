// ---------------- Add our own method 

//add method which gives true length to string
let myName = "Piyush         "
String.prototype.trueLength = function(){
    return this.trim().length
}
console.log(myName.length);  //15
console.log(myName.trueLength());  //6


// instead of adding method to perticular string/object.... etc
//we can add method in Object
//So that string/object will inherit method

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
let myHeros = ["thor", "spiderman"]

Object.prototype.piyush = function(){
    console.log(`Piyush is present in all object`);
}
Array.prototype.arrayFunc = function(){
    console.log(`This is array function`);
}

heroPower.piyush()
myHeros.piyush()
// heroPower.arrayFunc()   //Does not have access
myHeros.arrayFunc()


//==================================== inheritance
//accessing properties of other object

const User = {
    name: "Piyush",
    email: "piyush@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    //acess propty of TeachingSupport
    __proto__ : TeachingSupport
}
console.log(TASupport.isAvailable);

//Access property of user
Teacher.__proto__ = User
console.log(Teacher.email);

//---------------------- (Modern syntax) setPrototypeOf => Sets the prototype of a specified object o to 
// object proto or null. Returns the object o.
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideo);
console.log(TeachingSupport.email);  //as teacher inherits property from User