// Immediately Invoked Function Expressions (IFEE)
(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Amit')