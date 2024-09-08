// ------- Promise.all 

// Promise.all =>  allows you to execute multiple promises in parallel and aggregate their results. 
//      It takes an array of promises (or any iterable) and returns a single promise that resolves when all of the promises in 
//      the array have either resolved or rejected.


const promise1 = Promise.resolve(10)
const promise2 = Promise.resolve(30)
const promise3 = new Promise( (resolve , reject) => {
    setTimeout(resolve, 2000, "Good morning")
})
const promise4 = new Promise( (resolve , reject) => {
    setTimeout( () => {
        resolve("hello world")
    }, 2000)
})
const promise5 = fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())

Promise.all([promise1, promise2, promise3,promise4,promise5])
    .then( (results) => {
        console.log(results);

        let content = '';
        results.forEach( (item,index) => {
            content += `<li> ${item} </li>`;
        })
        return content;
    })
    .then( (content) => {
        document.body.innerHTML = content;
    })