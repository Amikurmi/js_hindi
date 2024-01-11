const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// ++++++++++++++++++     Filter method     ++++++++++

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num>4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
 
// console.log(newNums);

// +++++++++++++++++++++  Map method   +++++++++++

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) =>{ return num + 10})

// const newNums = myNumbers
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


// ++++++++++++++++++++++   Reduce method +++++++++

const myNum = [1,2,3]
// const total = myNum.reduce(function (acc, currvalue) {
//     console.log(`acc : ${acc} and currvalue is : ${currvalue}`);
//     return acc + currvalue
// },0)

const total = myNum.reduce( (acc, curr) => acc+curr  , 0)

console.log(total);


const ShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev",
        price: 4999
    },
    {
        itemName: "data scintist",
        price: 12999
    }

]
 const priceToPay = ShoppingCart.reduce( (acc,item) => acc+item.price,0)
 console.log(priceToPay);

