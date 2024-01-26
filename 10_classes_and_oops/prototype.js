let myName = "Sagar      "

// console.log(myName.truelength)



let myHeros =["thor", "spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",
    getSpiderpower: function(){
        // console.log(`Spidy power is ${this.power}`);
    }
}

Object.prototype.sagar = function(){
    // console.log(` Sagar is present in all objects`)
}


Array.prototype.heySagar =function(){
    // console.log("Sagar is saying hello");
}
// heroPower.sagar()
// myHeros.sagar()

// heroPower.heySagar()
myHeros.heySagar()

let anotherUsername ="Chai aur code"

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()

"sagar".truelength()
"iceTea".truelength()