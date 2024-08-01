// ************************************** Array Methods

//push
const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeros = ["superman", "flash","batman"]

marvelHeroes.push(dcHeros)  
console.log(marvelHeroes);    //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeroes[3][1]); //flash

//concat => This method returns a new array without modifying any existing arrays
const marvelHeroes1 = ["thor","ironman","spiderman"]
const dcHeros1 = ["superman", "flash","batman"]

const allHeros = marvelHeroes1.concat(dcHeros1)
console.log(allHeros);       //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread operator
const all_new_Heros = [...marvelHeroes1,...dcHeros1]
console.log(all_new_Heros);   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Flat => Returns a new array with all sub-array elements concatenated up to the specified depth.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  
console.log(real_another_array);

// --------------------------- convert into array ---------------

//Array.isArray
console.log(Array.isArray("Piyush")); //false

//Array.from => Creates an array from an iterable object.
console.log(Array.from("Piyush"));   // [ 'P', 'i', 'y', 'u', 's', 'h' ]
console.log(Array.from({name:"piyush"}));  //Intresting

//Array.of => Returns a new array from a set of elements.
let score1= 100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3,"Piyush",true));

