// Stack(Primitive),  Heap(Non-Primitive)

let myName = "Shivpal"
let myLastname = myName
myLastname = "Chaurasiya"

console.log(myName);
console.log(myLastname);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivpal@google.com"

console.log(userOne.email);
console.log(userTwo.email);
