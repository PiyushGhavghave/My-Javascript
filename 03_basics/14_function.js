// -------------------- Function
function sayMyName(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
sayMyName()

function addTwoNumbers(number1, number2){
    
    console.log(number1 + number2);
}
addTwoNumbers(4,7);

function addTwoNumbers1(number1, number2){

    return number1 + number2
}
const result = addTwoNumbers1(3, 5)
console.log("Result: ", result);

// ---------------------------- default parameter
function loginUserMessage(username = "sam" ){  //Defualt parameter = "sam"
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Piyush"));
console.log(loginUserMessage());

//  Rest operator => allows a function to accept an indefinite number of arguments as an array,
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500)); //[ 200, 400, 500 ]

function calculateCartPrice1(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice1(300,400,500,600));  //[ 500, 600 ]


//  Passing object in function
const user ={
    username :"Piyush",
    price: 733
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({username:"sam", price: 6235})

// passing array in function
const myNewArray = [200,400,500,199]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([5,6,7,8]));


