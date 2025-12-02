const accountId = 12435
let accountEmail = "aniket514@gmail.com"
var accountPassword = "78962"
accountCity = "Mumbai"

// accountId = 2// not allowed

accountEmail = "aniket143@gmail.com"
accountPassword = "31313131313"
accountCity = "pune"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table( [accountId, accountEmail, accountPassword, accountCity])
