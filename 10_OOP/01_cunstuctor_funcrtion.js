//-----------------Constuctor function
function makeUser(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
//'new' => new instance (object/context) created
const user1 = new makeUser("Piyush",16,true);
const user2 = new makeUser("Ram",12,false);
console.log(user1);
console.log(user2);

console.log(user1.constructor);  //[Function: makeUser]




// --------------- Practice example (Constuctor function)
function Car(name, model, year, color){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
}

const honda = new Car("Honda","suv450",2023,"white");
console.log(honda);
console.log(honda instanceof Car);  //true
console.log(honda instanceof Object);  //true