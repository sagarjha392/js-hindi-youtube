function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increment = function(){
    this.price++
}
const chai = new createUser("chai", 17);
const tea = new createUser("tea", 35);


createUser.prototype.printme = function(){
    console.log(`Username: ${this.username}`);
    console.log(`Price: ${this.price}`);
}

chai.printme()


