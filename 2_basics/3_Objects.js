//  Singleton
// Object:create

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Amit",
    "full_name": "Amit kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "bareilly",
    email: "amitkumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
console.log(jsUser[mySym]);
console.log(typeof(jsUser[mySym]));

jsUser.email = "ak@gmail.com"
// Object.freeze(jsUser)     // after declear freeze opertion do not any changes are allowed in the object
jsUser.email = "akmicro@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());