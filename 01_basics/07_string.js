const name = "Piyush"
const repoCount = 50

// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to  declare string
const gameName = new String("Piyush-Ghavghave")
console.log(gameName);  // gives object
console.log(gameName[0]); 
console.log(gameName.__proto__);

//-------------------------------- Property -------------
console.log(gameName.length);

//------------------------------- Methods -----------------
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'));

const subNameOne = gameName.substring(1,4); //iyu
console.log(subNameOne);
// Does not consider -ve value and start from 0.
// const newName = gameName.substring(-15,4); //Piyu
// console.log(newName);

//We can give negative index
const subNameTwo = gameName.slice(-15,4); //iyu
console.log(subNameTwo);


//trims start and end spaces
const newStringOne = "   Piyush   ghavghave  ";
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://piyush.com/piyush%20ghavghave"
console.log(url.replace('%20',"-"));

// Search
console.log(url.includes('Piyush'));   //false
console.log(url.includes('Piyush'.toLowerCase())); //true
console.log(url.includes('abc'));

// Split => returns array based on Separator
const userName = new String("Piyush-Ghavghave-CSE")  
console.log(userName.split('-'));         //[ 'Piyush', 'Ghavghave', 'CSE' ]
const str = 'Brown fox jumps over dog.';
console.log(str.split(' '));
console.log(str.split(''));
console.log(str.split());

//concate
console.log("Piyush".concat(" Ghavghave"))  //Piyush Ghavghave
 







