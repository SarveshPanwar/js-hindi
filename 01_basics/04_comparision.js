// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// comparisions convert null to a number, treating it as 0
// hence null > 0 is false and null >=0 is true

// null == 0 is flase because equality does not convert null
// to a number 

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// const x = 5;

// == is equal value
// console.log(x == 8);
// console.log(x == 5);
// console.log(x == "5");

// === is equal value and equal type
// console.log(x === 5);
// console.log(x === "5");

//  !== is not equal value or type
// console.log(x !== 5);
// console.log(x !== 8);
// console.log(x !== "5");






// **********************Logical Operators**************************

// let x = 6; 
// let y = 3;

// console.log(x < 10 && y > 7);
// console.log(x == 5 || y == 3);
// console.log(!(x == y));




// **********************Conditional(Ternary) Operators***************

// it assigns a value to a variable based on some condition

// SYNTAX 
// variableName = (condition) ? value1:value2

const age = 25;
let canVote = age < 18 ? "Too young, No":"Old Enough, Yes";
console.log(canVote);

// null, NaN, 0 , undefined , "" are also false



// conditional chains
// function example() {
//   return condition1 ? value1
//     : condition2 ? value2
//     : condition3 ? value3
//     : value4;
// }

// The above code is equivalent to the following if else chain

// function example() {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }