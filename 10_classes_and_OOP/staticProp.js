class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return '123'
    }
}
const Amit = new User("Amit")
// console.log(Amit.createId())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const i = new Teacher("iphone","i@phone.com")
i.logMe()