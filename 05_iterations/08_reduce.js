// -------------- reduce => The return value of the callback function is the accumulated result, 
//                          and is provided as an argument in the next call to the callback function.
const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function(accumulator, currentVal){
    console.log(`accumulator:${accumulator} and currentVal:${currentVal}`);
    return accumulator+currentVal
},0)  // 0 is initial accumulator value
console.log(myTotal);

const newTotal = myNums.reduce( (accumulator,currentVal) => ( accumulator + currentVal ),0)
console.log(newTotal);


// -------------------- exercise --------------
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const cartTotal = shoppingCart.reduce((accumulator,currentVal) =>( accumulator+ currentVal.price),0)
console.log(cartTotal);
