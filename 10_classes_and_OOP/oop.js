const user = {
    username: "Amit",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        console.log(`username: ${this.username
        }`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetail());


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Amit", 12,true)
const userTwo = new User("Amit Kumar", 2,false)
console.log(userOne.constructor);
console.log(userTwo);