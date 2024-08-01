//------------------ conversion into Number

let score = "33"   //=> 33
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber)
console.log(scoreInNumber)

// "33abc"   => NaN
// null  => 0
// undefined  => NaN
// "Piyush"  => Nan

// --------------------- conversion into boolean
let isLoggedIn = "Piyush"; 
let boolean_IsLoggedin = Boolean(isLoggedIn)
console.log(boolean_IsLoggedin)

// 1 => true ; 0 => false
// "" => false
// "Piyush" => true


//--------------------- conversion into string

let num = 33
let numInString = String(num)
console.log(numInString)
console.log(typeof numInString)

// 33 => "33"
// true => "true"


