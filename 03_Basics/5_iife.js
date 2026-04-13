// Immediately Invoked Function Expressions (IIFE)

// named IIFE   
(function one(){
    console.log(`DB CONNECTED`);
})();

// simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Shivpal');