const accountId =  144456 // Declaring constants
let accountEmail = "sagar@sagar.com"
var accountPassword = "123456" 
accountCity ="Jaipur"
let accountState;

// accountId = 2 // cannot assign new value to constants
accountEmail = "sagarjha2@sagar.com"
accountPassword= "12121212"
accountCity="New Delhi"

console.log(`accountId: ${accountId}`);

/*
Prefer not to use var to create variables
because of issue block scope & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

