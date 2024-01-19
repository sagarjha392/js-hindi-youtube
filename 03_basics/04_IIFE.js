// Immediately invoked function Expression (IIFE)


(function chai(){
    console.log("DB connected");
})();

((name)=>{
    console.log(`DB2 connected to ${name}`);
})("Sagar");