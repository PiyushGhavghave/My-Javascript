// using constructor => singleton
// Object.create

// using literals => NO singleton is formed

// ************************** Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "piyush",
    "Full name" : "Piyush Ghavghave",
    [mySym] : "mykey1",      //Using symbol as key
    age : 18,
    location : "nagpur",
    email : "piyush@google.com",
    isLogged : false,
    lastLoginDay : ["Monday","saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[mySym]);  //accesing symbol key

//changing values
JsUser.email = "piyush@gmail.com"
console.log(JsUser.email)

//freeze => Prevents the modification in object
// Object.freeze(JsUser)
JsUser.email = "piyush@yahoo.com"
console.log(JsUser.email)

// add Function in object
JsUser.greeting = function(){
    return ("Hello JS user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

// this 
JsUser.greeting2 = function(){
    return (`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2());




