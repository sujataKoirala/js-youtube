const userEmail="sujata@gmail.com"

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("hasnot got an email");
    
}

// falsy values
// false,0,-0,null,undefined,BigInt 0n,"",NaN


// TRUTHY VALUES
"0","false"," ",[],{},function(){}

// Nullish coaescing operator (??):null undefined

let val1;
// val1=6??20
// val1=null ?? 40
// val1=  50 ?? undefined 
val1=null??50??40

console.log(val1);

// terniary operator




 