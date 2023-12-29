const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","nagraaj"]

const newarr = new Array(1,2,3,4,5)
console.log(newarr);


//   Array  Methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()

myArr.unshift(9)  // add a value fornt in the array
myArr.shift()   // remove first value in the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);
console.log(myArr);


//    ++++++   Slice , Splice
console.log("A",myArr);
const A1 = myArr.slice(1,3)
console.log(A1);
console.log("B",myArr);
const A2 = myArr.splice(1,3)
console.log(A2);
console.log("C",myArr);
