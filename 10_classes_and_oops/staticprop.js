class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sagar = new User("sagar");
// console.log(sagar.createId());
1