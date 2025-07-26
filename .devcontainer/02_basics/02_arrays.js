// singleton

// literals
const mySymbol=Symbol(9)
const jsUsers={
    name:"Sujata",
    age:21,
    [mySymbol]:9,
    "full addresss":"chitwan bharatpur",
    isloggedin:false,
    address:"bharatpur",
    lastLoggedIn:["sunday","tuesday"]
}

console.log(jsUsers.name);
console.log(jsUsers["age"]);
console.log(jsUsers["full addresss"]);
console.log(jsUsers[mySymbol]);

jsUsers.email="sujata@gmail.com"
console.log(jsUsers);
Object.freeze(jsUsers)
jsUsers.email="koirala@gmil.com"
console.log(jsUsers);

jsUsers.greeting=function(){

}





