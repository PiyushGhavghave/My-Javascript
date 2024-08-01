// For In

// ---------------- Object
const myObject = {
    js:"Javascript",
    cpp:"C++",
    py:"Python"
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`)
}

//-------------------- Array
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key]);
}

// -------------------- Map => will not give any output
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
// for(const key in map){
//     console.log(key)
// }
