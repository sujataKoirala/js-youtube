let index=0
while (index<=10) {
    // console.log(`value of index is ${index}`);
    index = index +3
    
}

let myArray =['sujata','rancy','yasika']
let arr=0
while (arr< myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr= arr+1
    
    
}

// for of ]
const arrr=[1,2,3,4]
for (const num of arrr) {
    console.log(num);
    
}

const greetings="hello world"
for (const greets of greetings) {
    console.log(greets);
    
}

const map=new Map()
map.set('Np',"Nepal")
map.set('In',"India")
// console.log(map);

for (const key of map) {
console.log(map);

}


// const myObject={
//     game:'ludo',
//     other:'pubg'
// }
// for (const [key,value] of myObject) {
    // console.log(key,':-',vlaue);
    
// }

// for in

const myObject={
    js:"javascript",
    cpp:"c++"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming=["js","c++","rb","python"]

for (const key in programming) {
    console.log(programming[key ]);
    
}

const coding=["js","c","c++","python"]

coding.forEach( function(val){
    console.log(val);
    
} )

