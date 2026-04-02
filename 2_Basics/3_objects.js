// singleton
//object.create

// objects literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivpal",
    "Full Name": "Shivpal Chauasiya",
    [mySym]: "mykey1",
    age: 20,
    location: "UP",
    email: "Shivpal@google.com",
    isLoedIn: false,
    lasLoedIn: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shivpal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shivpal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
