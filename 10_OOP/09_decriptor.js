// ---------------------- cannot change property like Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descripter);    //{ value: 3.141592653589793, writable: false, enumerable: false, configurable: false}



// ------------------------- define attribute (writtable , enumarable, configurable) of property
const user = {
    name : "Piyush",
    email : "piyush@gmail.com",
    password : "1234",

    getUser : function(){
        console.log(`${name}`);
    }
}
console.log(Object.getOwnPropertyDescriptor(user, 'email'))

Object.defineProperty(user,'email', {
    writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(user, 'email'))

//try to iterate over name
for (const key in user) {
    if(typeof user[key] !== 'function'){
        console.log(`${key} : ${user[key]}`);
    }
}



