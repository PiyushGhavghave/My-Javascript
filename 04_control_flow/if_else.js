// if

if( 2 == '2'){   //true
    console.log("Executed 1"); 
}
if( 2 === '2'){  //false
    console.log("Executed 2");
}
if( 2 !== '2'){  //true
    console.log("Executed 3");
}

//else
const temperature = 41
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute");

// one line
const balance = 1000
if (balance > 500) console.log("test1"),console.log("test2");


// nesting
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");    //less than 1200
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");   //Allow to buy course
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In");     //User logged In
}

