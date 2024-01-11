let myDate = new Date()
console.log(myDate); 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.setMonth());
console.log(myDate.setUTCMilliseconds());


let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2023,0,23,6,56)
console.log(myCreateDate1.toLocaleString());
let myCreateDate2 = new Date("01-14-2023")
console.log(myCreateDate2.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreateDate2.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getDay());
console.log(newDate1.getMonth()+1);

let a = newDate1.toLocaleString('default',{
    weekday: 'long',
    month: 'long'
})
console.log(a);