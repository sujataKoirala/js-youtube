// Dates
 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2025,6,19)
// let myCreatedDate=new Date("07-19-2025")
let myCreatedDate=new Date(2025,6,19,12,29)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


