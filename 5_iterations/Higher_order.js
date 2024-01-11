// For of    Loop


// Maps   (uniqe order and same order)

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United states of America")
// map.set('Fr',"France")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-', value);
// }

// For of loop do not work on object

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// } 
// for (const [key,value] of myObject) {
//     console.log(key,':-', value);
// }

// For in loop

// const myObject = {
//     js: 'JavaScript',
//     cpp: 'Cpp',
//     rb: 'Ruby',
//     swift: 'swift by apple'
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const pro = ["js","rb","java","cpp"]
// for (const key in pro) {
//     console.log(`${key}   ${pro[key]}`);
// }



const coding = ['js','cpp','java','c','ruby']
// coding.forEach(function (item) {
//     console.log(item);
// } )



// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        lang: 'js',
        langFile:'js',
    }, {
        lang: 'python',
        langFile:'py',
    },
    {
        lang: 'cpp',
        langFile:'c++',
    },
    {
        lang: 'java',
        langFile:'java',
    },
    {
        lang: 'css',
        langFile:'css',
    }
]
myCoding.forEach( (item) => {
    console.log(item.lang);
})
