const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes)
// const heroes= marvelHeroes.concat(dcHeroes)

// console.log(heroes);
const all_heroes = [...marvelHeroes, ...dcHeroes];
// console.log(all_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));
