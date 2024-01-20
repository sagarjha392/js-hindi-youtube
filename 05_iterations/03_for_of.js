//  for of

const { log } = require("console");

// ["", "", ""]
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}


const greetings = `Hello world!`
for (const greet of greetings) {
    // console.log(greet);
}


// Maps

const map = new Map()
map.set("IND", "Republic of India")
map.set("UK", "United Kingdom")
map.set("USA", "United States of America")

for (const [key, value] of map) {
    // console.log(key, ':->', value);
}


const games = {
    'game1': "COC",
    'game2': "Pubg",
    'game3': "GTA-V",
    'game4': "spiderman"
    
}

// for (const [key, value] of games) {
//     console.log(key, ':->', value);
// }