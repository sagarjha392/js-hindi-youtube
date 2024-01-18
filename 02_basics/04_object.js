// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    email:"sagarjha@google.com",
    fullName: {
        userFullName:{
            firstName: "Sagar",
            middleName:"Kumar",
            lastName:"Jha"
        }
    }
}

// console.log(regularUser.fullName);

const object1  = {1: "a", 2: "b"}
const object2  = {3: "a", 4: "b"}

// const obj3 = {object1, object2}
// const obj3 = Object.assign({}, object1, object2)

const obj3 = {...object1, ...object2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
    {
        id:1,
        email:"sagar@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "Js in hindi ",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor);


