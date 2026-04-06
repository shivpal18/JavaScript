const user = {
    username: "Shivpal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);



// function One(){
//     console.log(this);
// }
// One()


// function One(){
//     let username = "Shivpal"
//     console.log(this.username);
// }
// One()


// const One = function(){
//     let username = "Shivpal"
//     console.log(this,username);
// }



const One = () => {
    let username = "Shivpal"
    console.log(this)
}
// One()


// Exciplit keyword

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 7));


// Emplicit keyword

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Shivpal"})
console.log(addTwo(4, 7));


