// primitive 
//  7 types: String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outSideTemp = null
let userEmail = undefined
let a;   //  undefined
const id = Symbol('123')
const anotherId = Symbol('123')
// const BigInt = 3436325932452352335n  --- for large value   




// Reference (Non Primitive)
//  Array, Object, function

const heros = ['shaktiman','nagraj','doga']
let myObj={

    name:'hitesh',
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof BigInt); // for check the datatype



// +++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (primitive data type)
//  Heap (Non Primitive data type)

let myYoutubename = "amitkumaryoutube"
let anothername = myYoutubename
anothername = "ak"
console.log(myYoutubename);
console.log(anothername);


let userOne={
    name:'amit',
    age: 20
}
let userTwo=userOne

userTwo.name='amit kumar'
console.log(userOne);
console.log(userTwo);