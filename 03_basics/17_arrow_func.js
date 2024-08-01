// **************************** Arrow function ******************

// Explicit return
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// implicit return
 const addTwo1 = (num1,num2) => (num1+num2)
 console.log(addTwo1(2,8));

 const objReturn = () => ({username : "Piyush"})
 console.log(objReturn());