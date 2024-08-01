const score = 400
console.log(score);

//explicitly define for number
const balance = new Number(100)
console.log(balance);

//------------------ Methods --------------------

// number into string
console.log(balance.toString()); 
console.log(balance.toString().length);

// toFixed 
console.log(balance.toFixed(2));  //100.00

// toPrecision round of value
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  //124
console.log(otherNumber.toPrecision(4));  //123.9
console.log(otherNumber.toPrecision(6));  //123.897

//toLocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString());  //10,00,000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)

// absolute value
console.log(Math.abs(-4));  //4

// round
console.log(Math.round(4.56)); // 5

// ceil and floor
console.log(Math.ceil(7.2));  //8
console.log(Math.floor(7.9)); //7

// square root
console.log(Math.sqrt(25));  //5

// min and max
console.log(Math.min(3,6,7,12,9)) //3
console.log(Math.max(3,6,7,12,9)) //12

// Random => gives value   0 <= value <= 1
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// random number between 10 and 20
const min = 10
const max = 20
let num = Math.random() * (max-min+1)+min; // range = (max-min+1) 1 to avoid 0
console.log(Math.floor(num));





