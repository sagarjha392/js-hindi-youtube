// var c= 300

let a = 300;
/* *Block scope */
if (true) {
  let a = 10;
  const b = 29;
}
/* *Block scope */

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";
  
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);

  two()

}

// one()

/*+++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++*/
console.log(addone(5))
function addone (num){
  return num + 1;
}

// addTwo(2) 

const addTwo = function(num){
  return num +2
}