const user = {
    username: "Shivpal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detail from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);   
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne = new User("Shivpal", 12, true)
const userTwo = new User("JS", 14, false)
console.log(userOne.constructor);
console.log(userTwo);
