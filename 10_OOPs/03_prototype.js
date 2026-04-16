let myName = "Shivpal    "
let lastName = "Chaurasiya     "
// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.shivpal = function(){
    console.log(`Shivpal is present in all objects`);
}
 
Array.prototype.heyShivpal = function(){
    console.log(`Shivpal says Hello`);
    
}
// heroPower.shivpal()
myHeros.shivpal()
myHeros.heyShivpal()
// heroPower.heyShivpal()




// Inheritance

const user = {
    name: "shivpal",
    email: "Shiv@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Shiv"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenh is: ${this.trim().length}`);   
}
anotherUsername.trueLength()
"Shivpal".trueLength()