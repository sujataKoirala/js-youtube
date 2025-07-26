// < ,>,<= ,>= ,==,!=,===,!==

if(9>=9){
    console.log("executed");
    
}

const user=200
if(user>100){
    const power="sujata"
    console.log(`${power}`);
    
}
// console.log(`${power}`);

const balance =1000

if(balance<500){
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}
else if(balance>1200){
    console.log("greater than 1200");
    
}
else{
    console.log("smaller than 1200 and equal to 1000");
    
}

const loggedInFromGoogle = true
const loggedInFronEmail=false

if(loggedInFromGoogle || loggedInFronEmail){
    console.log(`User logged in`);
}
const month = 4
switch (month) {
  case 1:
        console.log("january");  
        break;

        case 2:
        console.log("feburary");   
        break;

        case 3:
        console.log("march");   
        break;
        
        case 4:
        console.log("april");   
        // break;
        
        case 5:
        console.log("june");   
        break;

    default:
        console.log("default case match");
        
        break;
}