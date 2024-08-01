// Immediately Invoked Function Expressions (IIFE)
//(function defination)()

//Named iife
(function chai(){
    console.log(`DB connected`);   
})();          //semicolon is important to end 

//Un-Named iife
( function(){
    console.log(`DB connected two`);
} )();

( (name) => {
    console.log(`DB connected three ${name}`);
} )("Piyush");



