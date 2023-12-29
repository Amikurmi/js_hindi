const name = "amit"
const repoCount = 50

console.log(name + repoCount + " value");
console.log(`My name is ${name} and my repo count is ${repoCount}`);
console.log(`My name is ${name} and my repo count is f${repoCount}`);

const gameName = new String('Amit kumar')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)  // Negative value are not allowed
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log((anotherString));

const newStringOne = "     Amit  kumar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amit.com/amit%20kumar"
console.log(url.replace("%20","-"));
console.log(url.includes('amit'));


const a = "amit-kumar-nbj"
console.log((a.split('-')));

const b = "a m i t k m a r"
console.log(b.split(" "));