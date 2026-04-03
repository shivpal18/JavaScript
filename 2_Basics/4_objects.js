//const tinderUser = new Object()   //singleton object
const tinderUser = {}   // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Shivpal",
            lastname: "Chaurasiya"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

const users = [
    {
        id: 1,
        email: "shiv@google.com"
    },
    {
        id: 1,
        email: "shiv@google.com"
    },
    {
        id: 1,
        email: "shiv@google.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
