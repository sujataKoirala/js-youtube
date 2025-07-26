for(let i=0;i<=10;i++){
    const element =i;
    if(element==6){
        console.log("6 is the best number");
        
    }
    console.log(element);
    
}

for(let i=0;i<=10;i++){
    console.log(`outer loop value:${i}`);
    
    for(let j=0;j<=10;j++){
        console.log(`inner loop value:${j}`);
        
    }
}

// break and continue

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        break;
        
    }
    console.log(`value of i is ${i}`);
    
    
}
