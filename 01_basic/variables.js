const accountId = 144553 
let accountEmail="avith@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"
let accountState;

// accountId= 2  //not allowed

accountEmail = "hc@hc.com"
var accountPassword = "123456"
accountCity = "Bangalore"

//prefernot to use var 
// because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])