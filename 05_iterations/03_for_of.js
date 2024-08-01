// for of 

// -------------------------------- array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
//--------------------------------- string
const greetings = "Hello World"
for(const greet of greetings){
    if(greet === ' '){
        continue;
    }
    console.log(`Each char is ${greet}`);
}

// map (Oredr is maintained)
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
console.log(map);

// --------------------------------- Map
for(const iterator of map){    //iterator gives an array of [Key , Value]
    console.log(iterator);   //[ 'IN', 'India' ] [ 'USA', 'United states of America' ] [ 'FR', 'France' ]
}
// destructure
for(const [key,value] of map){
    console.log(`Key:${key}  and  Value:${value}`);
}

//--------------------------------------- Object => myObject is not iterable
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }



