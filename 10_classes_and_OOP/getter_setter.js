class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._passwoed.toUpperCase()
    }
    set password(value){
        this._passwoed = value 
    }
}
const a = new User("Amit@gmail.com","abc")
console.log(a.password)
console.log(a.email)