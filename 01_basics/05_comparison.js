console.log("2" > 1)
console.log("02" > 1);
console.log("22abc" > 1);

console.log(null > 0);  // false
console.log(null == 0); //false
console.log(null >= 0); //true
/* equality check == and comparison > < >= <= works differently.
comparison convert null into number, treating it as 0.
that's why null >= 0 is true  , null > 0 is false.
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// --------- strict check ------------

console.log("2" === 2) //false