// const userEmail = "Piyush@gmail.com"  //true
// const userEmail = ""  //false
const userEmail = []  //true

if(userEmail){
    console.log("Got User email");
}else{
    console.log("Dont have email");
}

// -------------------- falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//---------------------- truthy values
// "0", 'false', " ", [], {}, function(){}


// to check for empty array
let userEmail1 =[]
if(userEmail1.length === 0){
    console.log("array is empty");
}
// to check for empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){   //Created array of keys 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null and undefined
let val1;
val1 = 10 ?? 5  
console.log(val1);  //10

val1 = null ?? 14  
console.log(val1);  //14

val1 = undefined ?? 7  
console.log(val1);  //7

val1 = null ?? 20 ?? 30
console.log(val1);  //20


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("Greater than 80");





