function MyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("P");
    console.log("A");
    console.log("L");
}
// MyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3, 5)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    // return num1 + num2
}
const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Shivpal"));
