// ====================== promises

//----------------- using .then .catch to resolve/consume

//promise 1
const promiseOne = new Promise( function(resolve, reject){

    setTimeout(() => {
        console.log("Async task 1 ");
        resolve()   //connect promise to .then
    }, 1000);
})
promiseOne.then( function(){
    console.log("Async task1 resolved");
})

//promise 2
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then( function(){
    console.log("Async task2 resolved")
})

//priomise 3
//passing data to after resolve to .then 
const promiseThree = new Promise( function(resolve, reject){
    setTimeout( function(){
        //after performing some async operation we got Data
        user1 = {
            usename : {
                name : "Piyush",
                lastname : "Ghavghave"
            },
            password : "1234"
        }
        resolve(user1)
    }, 1000)
})
promiseThree.then( function(user){
    console.log(user);
})

//promise 4(reject)
//Chainning of .then (Then-able)
const promiseFour = new Promise( function(resolve,reject){
    setTimeout( function(){
        let error = false
        //if there is no error then resolve
        if(!error){
            resolve({usename : "Piyush",password : "abc@13"})
        }
        else{
            reject("Error : Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.usename
}).then( function(myUsername){
    console.log(myUsername);
}).catch( function(error){
    console.log(error);
}).finally( ()=> {
    console.log("Promise is either resolved or rejected");
})


//------------ using Async await to consume/resolve

//promise 5
const promiseFive = new Promise( function(resolve, reject){
    setTimeout( function(){
        let error = false
        //if there is no error then resolve
        if(!error){
            resolve({usename : "Javascript", password : "1234"})
        }
        else{
            reject("Error : Javascript went wrong")
        }
    },1000)
})

async function resolvePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
resolvePromiseFive()


// ================================= fetch => returns promise =======================

//--------------- fetch using async/await
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //converting into json takes time.... hence await
        const data  = await response.json();
        console.log("my all user:", data);
    } catch (error) {
        console.log("Error occured:", error);
    }
}
getAllUsers()



// ------------- fetch using .then .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then( function(response){
    return response.json()
})
.then( function(data){
    console.log(data)
})
.catch( function(error){
    console.log("error occured :", error);
})
