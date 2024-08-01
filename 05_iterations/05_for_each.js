//----------- For each
const codeLangauge = ["js", "ruby", "java", "python", "cpp"]
codeLangauge.forEach( function (item){
    console.log(item);
} )
codeLangauge.forEach( (item) => {
    console.log(item);
} )

// --------- External function in forEach
function printme(item){
    console.log(item);
}
codeLangauge.forEach(printme)

// ------------ Parameters -> item,index,arr
codeLangauge.forEach( (item , index, arr) => {
    console.log(item,index,arr)
})

// ------------- Accesing object from array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(`${item.languageName} : ${item.languageFileName}`);
})

//--------------- for each does not return any value/item
const codingLangauage = ["js", "ruby", "java", "python", "cpp"]
const returnValue = codingLangauage.forEach( (item)=>{
    console.log(item);
    return item   
})
console.log(returnValue);  //undefined