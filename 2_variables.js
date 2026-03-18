const acountId = 144553
let acountEmail = "shiv@acountEmail.com"
var acountPassword = "12345"
acountCity = "Gorakhpur"

// acountId = 2   Not allowed

acountEmail = "Shivpal@email.com"
acountPassword = "1235677"
acountCity = "Bengaluru"

console.log(acountId);

/* Prefer not to use var
because of issue in block scope and functional scope*/

console.table([acountId, acountEmail, acountPassword, acountCity])