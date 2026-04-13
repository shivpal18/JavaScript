const marvel_heros = ["Thor", "Ironman", "Hulk"]
const dc_heros = ["Spiderman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)

const all_heros = marvel_heros.concat(dc_heros)

console.log(marvel_heros);
//console.log(marvel_heros[3]);

console.log(all_heros);

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Shivpal"));
console.log(Array.from("Shivpal"));
console.log(Array.from({name: "Shivpal"}));  //Return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
