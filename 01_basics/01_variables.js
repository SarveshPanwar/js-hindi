 const accountId = 144553
 let accountEmail = "shanu@jobprep.com"
 var accountPassword = "12345"
 accountCity = "Delhi"    // allowed in js but bad practise 
 let accountState;

// var and let both used for variables, nowadays var is not used, let 
// eliminates the problem of scope which var doens't.
// accountId = 2 // not allowed

accountEmail = "sp@sp.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and funtional scope 
*/

console.table({accountId, accountEmail, accountPassword, accountCity, accountState})