function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
addTwoNumbers(3,6)

function addTwoNumbers(number1,number2){
    // let result = (number1+number2)
    // return result
    return number1 + number2
    console.log("Amit");  // after return no any value is print by function
}
const result = addTwoNumbers(3,6)
console.log("Result : ",result);

function loginUserMsg(username){
    if(username===undefined){
        console.log("Please enter username");
        return
    }
    return `${username} Just Logged in`
}
console.log(loginUserMsg("amit"));


function calculatecartPrice(...num1){
    return num1
}
console.log(calculatecartPrice(200,300,400,500,1000));


// const user =  {
//     username: "Amit",
//     price: 123
// }

function handleObject(anyoject){
    console.log(`Username is ${anyoject.username} and price is ${anyoject.price}`);
}
// handleObject(user)   Or
handleObject({
    username:"sam",
    price: 1234
})


const myNewArray = [200,300,400]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([400,500,5667,765]));