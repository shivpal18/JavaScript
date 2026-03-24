// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 123456534735242n

// Reference (Non-Primitive) 

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "avengers"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}