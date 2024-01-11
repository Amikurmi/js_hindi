const promiseOne = new Promise(function(resolve,reject){
    // Do an async call
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Asyn task is completed")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFouth = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Amit", password: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
        
    }, 1000);
})
promiseFouth.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){ 
    console.log(error);
}).finally(function(){
    console.log("the Promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject("ERROR: Js went  wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()




// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log('E :  ',error);
//     }
// }
// getAllUsers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
  
})