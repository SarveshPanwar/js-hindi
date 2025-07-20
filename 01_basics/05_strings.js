const name = "Sarvesh"
const repoCount = 50

// console.log(name + repoCount + " Value");             // bad syntax


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    // better syntax, more readable, we make use of bacticks `` and use 
       // place holder %{} to put in expressions --> **STRING INTERPOLATION**



// String Declaration
const gameName = new String('Sarvesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);        // accessing protoype 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));


// const newString = gameName.substring(0, 4)
// console.log(newString);


const anotherString = gameName.slice(-8, 4) 
/* can also give -ve values   in splice, uss se reverse se start hoga */ 
console.log(anotherString);  // Output is rv
// because slice (-8, 4) becomes (2, 4) reason -> -8+10 = 2

const newStringOne = "    hitesh     "    // we encounter strings with spaces
console.log(newStringOne);
console.log(newStringOne.trim());   // removes starting and ending spaces
