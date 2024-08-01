// Scope
let a=300
const b= 400;
var c = 500
if(true){
    let a=10
    const b=20
    var c=30
    console.log("Inner a:",a);
}
console.log(a);   //300
console.log(b);   //400
console.log(c);  //30

// Nested scope

function one(){
    const username = "Piyush"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
    // console.log(website);   //website undefined
    two();
}
one()

// ***************************** intresting *************

//Declaration
console.log(add(5)); 
function add(num){   
    return num+1
}

//Declaration and store
// console.log(addTwo(5));     //Cannot access 'addTwo' before initialization
const addTwo = function(num){   
    return num+2
}
console.log(addTwo(5));

const addthree = (num) => num+1
console.log(addthree(3));



