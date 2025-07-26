const user ={
    username:"sujata",
    price:999,
    age:21,
    welcome:function(){
       console.log(`${this.username},welcome to website`);
       
    }

}
user.welcome()
user.username="suju"
user.welcome()

function chai(){
    console.log(this.username);
    
}
chai()
const chaii = () => {
    console.log(this);
    
}
chaii()

// const arrow =(num1,num2)=> (num1+num2);

// console.log(arrow(5,8));

const arrow =(num1,num2)=>({username:"sujs"})
    

console.log(arrow(5,8));



// **************IIFE(immediately invoked function expressions)***************************


(function chai (){
    console.log(`db connected`); 
})();
 
//  ( ()=>
// console.log(`db connected sec`)
//   )()

( (name)=>
console.log(`db connected sec ${name}`)
  )("sujata")