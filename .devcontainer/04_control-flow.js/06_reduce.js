const myNums=[1,2,3]

const myTotal=myNums.reduce(function (accumulator,currentvalue) {
    console.log(`accumulator is ${accumulator} and current value is ${currentvalue}`);
    
    return accumulator*currentvalue;
},2)
console.log(myTotal);
