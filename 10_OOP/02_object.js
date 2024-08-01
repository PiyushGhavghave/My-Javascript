//-------------------- function can be object
function sayMyName(name){
    return name;
}
//adding proprty to funtion
sayMyName.piyush = 2;

console.log(sayMyName("Piyush"));
console.log(sayMyName.piyush);  //2
console.log(sayMyName.prototype);  //{}
console.log(sayMyName);    //[Function: sayMyName] { piyush: 2 }



//-------------------------  Adding methods to our object function
function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score ++;
}
createUser.prototype.print = function(){
    console.log(`${this.username}'s score is ${this.score}`);
}

const piyush = new createUser("piyush", 98);
const ram = new createUser("ram", 96);

piyush.print()
piyush.increment()
piyush.print()

