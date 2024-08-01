// ======================= Primitive - call by value
// 7 types : string, number, boolean, null, undefined, symbol, bigInt

let id = Symbol('123')
let anotherid = Symbol('123')
console.log(id === anotherid);  //false
// bigInt
let bigNumber = 725737352872367763726n; 


// ========================= Non primitive - reference
// Array, objects, Function

const heros = ["ironman","shaktimaan","Batman"]
console.log(typeof heros); //object

let OBJ = {
    name : "piyush",
    age : 36
}
console.log(typeof heros); //object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); // function object


// **************************** stack and heap *************************

// Stack(primitive) - copy of value
// Heap(Non primitive)  - reference

let myname = "Aniket"
let anotherMyName = myname
// if try to change anothername, it will change only anothername
anotherMyName = "piyush"

console.log(myname);
console.log(anotherMyName)


let user1 = {
    email : "user1@gmail.com",
    upi: "user1@ybl"
}
let user2 = user1
// if try to change user2, it will change both user1 & user2
user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);



