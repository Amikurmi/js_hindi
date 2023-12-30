// const useremail = "Amit@gmail.com"
// if (useremail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// const useremail1 = ""
// if (useremail1){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// Falsy Values
//   false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
//  "0", "false", " ", [], {}, function(),  


const user = []

if(user.length === 0){
    console.log("Array is Empty");
}

const obj ={}
if (Object.keys(obj).length===0){
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");