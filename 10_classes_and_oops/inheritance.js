class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email= email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@chaiwala.com", "123")

chai.addCourse()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
chai.logMe()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);