// const  tinderUser = new Object()    //singleton method
const tinderUser = {}    //non singleton
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "amit",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 1,
        email: "ak@gmail.com"
    },
]
console.log(user[1].email)

console.log(tinderUser);
console.log((Object.keys(tinderUser)));
console.log((Object.values(tinderUser)));
console.log((Object.entries(tinderUser)));
console.log(tinderUser.hasOwnProperty('id'));



const course = {
    coursename: "js in hindi",
    price: 1000,
    courseInstructor: "hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);

// const navbar = ({company}) => 

// }
// navbar(company = "Amit")



// ++++++++++++++++++  JSON ++++++++++++++++++++++
// {
//     "name": "Amit"
//     "email": "ak@gmail.com"
//     "age": 19
// }