// Date

let myDate = new Date();
console.log(myDate);  //ISO format
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(myDate.toJSON())

// -------------------- Create own date
let myCreatedDate = new Date(2023 ,0, 23)  //Months starts from 0 
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate1 = new Date(2023 ,0, 23, 5 ,3) 
console.log(myCreatedDate1.toLocaleString());

// yy-mm-dd
let myCreatedDate2 = new Date("2023-01-12")    // in this format month start from 1
console.log(myCreatedDate2.toLocaleDateString());
// mm-dd-yy
let myCreatedDate3 = new Date("01-19-2023")    // in this format month start from 1
console.log(myCreatedDate3.toLocaleDateString());

// ---------------------- Time stamp
let myTimeStamp = Date.now(); //gives current time NOT object

console.log(myTimeStamp);      //Current Time in ms
console.log(myCreatedDate.getTime()); // Time at 23/1/2023 in ms

// ---------------------- convert into second
console.log(Math.floor(Date.now()/1000));  // current time(ms)/100

// ------------------------ More Date Methods
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());   //sunday = 0, monday =1 ..........
console.log(newDate.getMonth()+1); // january = 0 ...........

console.log(`Date is ${newDate.getDate()} and time is ${newDate.toLocaleTimeString()}`);


// ---------------------- toLocaleDateString  (costomize)
console.log(newDate.toLocaleString('default',{
    weekday : "long",
    day : "2-digit",
    month : "long",
    year : "2-digit",
}));


