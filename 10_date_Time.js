// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let newCreatedDate = new Date(2026, 2, 29)
// let newCreatedDate = new Date(2026, 2, 29, 5, 3)
// let newCreatedDate = new Date("03-29-2026")
let newCreatedDate = new Date("03-29-2026")
console.log(newCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

