// If
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature === 40) {
//     console.log("Less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to learn JS");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}