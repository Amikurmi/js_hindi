function setUsername(username){
    // complex DB calss
    this.username = username
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai","chai@fb.com","1334")
console.log(chai);