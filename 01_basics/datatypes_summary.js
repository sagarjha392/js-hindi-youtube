// # Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId);
// const bigNumber = 3232322348489549595494999999999999999999999999n


// # Non- Primitive (Reference type)
// Array, Objects, Functions

const heroes= ["shaktimaan", "naagraj", "doga"];
const myObj ={
    name: "sagar",
    age: 22
}

const myFunc = function(){
    console.log("Hello, World!");
}

// console.log(typeof id);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (primitive), Heap(Non-primitive)

let myYoutubeName = "CodingFacts"

let anothername = myYoutubeName
anothername="youSagar"

console.log(myYoutubeName);
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "1232ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne);
console.log(userTwo);
