//-------------- map => returns an array that contains the results as defined in callback function on each element of an array,.
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => num+20)
const newNums1 = myNumers.map( (num) => {
    return num
})
console.log(newNums1);

//--------------- Using forEach map elements
const newarr = []
myNumers.forEach( (item) => {
    newarr.push(item+10)
})
console.log(newarr);

// -------------- Method Chaining
// 
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNum.map( (num) => num*10).map( (num) => num+1).filter( (num) => num >= 40)
console.log(newNumber);



