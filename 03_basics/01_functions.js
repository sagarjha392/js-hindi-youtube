function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayMyName // reference
// sayMyName() //execution

function addTwoNumbers(number1, number2){
    return number1+number2;
}

addTwoNumbers(2, "4")

function calculateCartPrice (...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400, 500, 2000, 3000));
const user= {
    username: "Sagar",
    price:199,
}

function handleobject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleobject(user)
// handleobject({
//     username: "Sagarjha392",
//     price: 399
// })

const myNewArray = [200, 400,600, 100]

function returnSecondValue (getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));