// Array

const myArr = [1,2,3,4,5,6]
console.log(myArr);
console.log(myArr[1]);

const myArr2 = new Array("Piyush","Ghavghave",9.75,true)
console.log(myArr2);

// ==================== Methods

const newArr = [1,2,3,4,5]

// push 
newArr.push(8)
console.log(newArr);
// Pop 
newArr.pop()
console.log(newArr);

// unshift => insert element at start
newArr.unshift(9)
console.log(newArr);
// shift => Removes first element from an array and returns it
newArr.shift()
console.log(newArr);

// includes
console.log(newArr.includes(9));
// indexof
console.log(newArr.indexOf(3));

// Join => Adds all elements of an array into a string, separated by the specified separator string.
const tempArr = newArr.join("-")
console.log(tempArr);      //"1-2-3-4-5"
console.log(typeof tempArr); // string


// slice(start,end) => Returns a copy of a section of an array. 
// splice(start,deleteCount) => Removes elements from an array 

console.log("A ",newArr);   //[ 1, 2, 3, 4, 5 ]

const myn1 =newArr.slice(1,3)
console.log(myn1);   //[ 2, 3 ]

console.log("B ",newArr);  //[ 1, 2, 3, 4, 5 ]

const myn2 =newArr.splice(1,3)
console.log(myn2);   //[ 2, 3, 4 ]

console.log("C ",newArr);   //[ 1, 5 ]









