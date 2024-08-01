// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// ----------------------- nested  object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "piyush",
            lastname: "ghavghve"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); //

// --------------------------- merging object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

//assign  => Copy the values from one or more source objects to a target object. Returns the target object.
// const obj4 = Object.assign(obj1,obj2,obj5)   //obj1 => target objcet
const obj4 = Object.assign({},obj1,obj2,obj5)   //{} => target object
console.log(obj4);

// spread
const obj6 = {...obj1, ...obj2, ...obj5}
console.log(obj6);

// ----------------------- Objects in array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[1].email);  //h@gmail.com

// -------------- More Objcet method
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// check property avaialble
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true
console.log(tinderUser.hasOwnProperty('email'));  //false



//---------------------------------------- De-structuring
//  The destructuring assignment that is used to unpack properties from objects or 
// values from arrays, into distinct variables.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);  //hitesh

const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);   //const a = obj.a;
console.log(b);   // const b = obj.b;

// we can give new name to courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);       //hitesh





// ******************************** JSON/API **************************** 
// {
//     "name": "Piyush",
//     "coursename": "javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]





