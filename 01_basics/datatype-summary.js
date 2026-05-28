// # Primitive
// 7 types 
/*
string
Number
Boolean
null
undefined
Symbol
BigInt
*/
const score = 100
const scoreval = 176.89

const isLoggedIn = false
const outsideTemp = null
let email ;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 9007199254740991n
console.log(bigNumber);
// Reference (Non - Primitive)

// Array,Objects,Functions

const heros = ["shaktiman", "doga", "krish", "john wick"]
let myObj = {
    name: "suraj",
    age: 19
}
const myFunction = function() {
    console.log("hello world");
}
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction); 
console.log(typeof bigNumber); 
console.log(typeof id);