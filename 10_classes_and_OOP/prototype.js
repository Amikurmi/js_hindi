let myHeros = ['thor','spiderman']
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
heroPower.hitesh()
// myHeros.hiitesh()


// Inheritance 
const user = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proyto__:TeachingSupport
}
Teacher.__proyto__ = user

// Mordern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(this);
    console.log(`True Length is ${this.trim().length}`);
}
anotherUserName.trueLength()
"Amit".trueLength()
"Akash".trueLength()