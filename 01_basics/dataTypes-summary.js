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


// console.log(typeof id);




// ********************** Memory *********************************

// Stack Memory(Primitive types), Heap Memory(Non-Primitive types)

/* when a variable/object is defined/declared in stack memory, we get a COPY of the variable/object*/
/* when a variable/object is defined/declared in heap memory, we get a REFERENCE of the variable/object*/

let myYoutubeName = "sarveshpanwar"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email: "user1@google.com",
    upi: "user1@ybl",
}

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);


userOne.email = "user2@google.com"
userOne.upi = "user2@ybl"

console.log(userOne);
console.log(userTwo);
