const coding = ["js", "python", "java", "cpp", "ruby"]

// coding.forEach( function (item){
//     console.log(item)
// })


// coding.forEach((item) => {
//     log(item)
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        extension: "js"
    },
    {
        languageName: "Java",
        extension: "java"
    },
    {
        languageName: "C++",
        extension: "cpp"
    },

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})