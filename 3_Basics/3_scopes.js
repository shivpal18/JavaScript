// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner:", a);
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Shivpal"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "shivpal"
    if(username === "shivpal"){
        const website = " youtube"
        console.log(username + website);
        
    }
}

// Interesting case (Hoisting)

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

addTwo(5);
const addTwo = function(num){
    return num + 2
}