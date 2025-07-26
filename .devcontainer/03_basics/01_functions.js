function saymyname(){
    console.log("sujata");
}
// function  addition(num1,num2){
//     console.log(num1 + num2);
    
// }
// addition(8,9)

function  addition(num1,num2){
 let result=num1+num2;
 return result;
    
}
const result = addition(8,9)
console.log(result)

function loginuserMessage(username){
    return `${username} just logged in`
}
console.log(loginuserMessage("sujata"))

const user={
    name:"sujata",
    age:21
}
function myobj(anyObject){
    console.log( `my name is ${anyObject.name} and my age is ${anyObject.age}`)
}
myobj(user)

 
