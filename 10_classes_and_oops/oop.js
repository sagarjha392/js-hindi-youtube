const user ={
    username: "sagar",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User (username, loginCount,isLoggedIn){
    this.username= username
    this.loginCount= loginCount
    this.isLoggedIn= isLoggedIn

    this.greetings = function() {
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new User("sagar", 12, true); 
const usertwo = new User("chai", 11, false); 
// console.log(userOne.constructor);
// console.log(usertwo);

