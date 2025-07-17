let score = "Sarvesh"

// console.log(typeof score);
// console.log(typeof(score)); // another way

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// Notes on conversion
// "33" => 33
// "33abc" => Nan (not a number)
// true => 1
// false => 0


let isLoggedIn = ""

let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "sarvesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************* Operations ************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log (2+2);
// console.log (2-2);
// console.log (2*2);
// console.log (2**2);
// console.log (2/2);
// console.log (2%3);

let str1 = "Hello"
let str2 = " Sarvesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3 = 4


// Postfix Operator (x++)
// -> increments the value but returns the value BEFORE increment
let x = 3;
const y = x++;
// console.log( x, y);

// Prefix Operator (++x)
// -> increments the value and returns the value AFTER increment
let a = 3;
const b = ++a;
console.log( a, b);
 