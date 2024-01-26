class User{
    constructor(email, password){
        this.email = email;
        this.password= password;
    }
    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email= value;
    }
    set password(value){
        this._password= value;
    }
    get password(){
        return `${this._password}sagar`
    }
}

const sagar = new User("s@sagar.com", "abc")

console.log(sagar.email);