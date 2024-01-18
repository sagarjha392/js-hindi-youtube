// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sagar",
    "full name": "Sagar Kumar Jha",
    age:18,
    [mySym]: "key1",
    location: "New Delhi",
    email: "sagar@google.com",
    isLoggedIn: false,
    lastloginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting());

