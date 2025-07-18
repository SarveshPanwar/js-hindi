// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

 /* Varibles in js are not assocaited any particular data type,
    any variable can be assigned and reassgined value of all data
    type, Hence JS is dynamic lang with dynamic types */

/*  JS is also WEAKLY typed lang as it allows implicit type conversion
    when an operation involves mismatched types*/


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 283178412942184198428n   // n at last makes it BigInt
//

// Reference Type (Non Primitive)

// Types : Array, Objects, Functions


const myArray = ["shaktiman", "naagraj", "doga"]

let myObject = {
    name: "sarvesh",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}
//


console.log(typeof id);


