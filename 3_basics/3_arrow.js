const course = {
    username: "amit",
    price: 1234,
    welcomeMessage: function(course){
        console.log(`${this.username}, weicome to this course`);
        console.log(this);
    }
}
// course.welcomeMessage()
// course.username = "amit kumar"
// course.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "amit"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "amit"
//     console.log(this.username);
// }
// chai()

//    ++++++++++++++  Arrow Function +++++++++++++++

// ()=>{} this is a arrow function

const chai = () => {
    let username = "amit"
    console.log(this);
}
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,5));


// Implicit function

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username: "Amit"})
console.log(addTwo(3,5));