const coding =["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// }  )

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNum.filter( (num) =>{
     return num>4
})

// console.log(newNum);


const books =[
    {title:"book one",genre:"history",publish:1990 },
    {title:"book two",genre:"comedy",publish:1996 },
    {title:"book three",genre:"story",publish:2001},
    {title:"book four",genre:"science",publish:2005 },
    {title:"book five",genre:"comedy",publish:2000 },
    {title:"book six",genre:"history",publish:1995 }
    
]

let newBooks = books.filter( (book)=> book.genre=== 'comedy'  )
let  secBooks=books.filter( (book)=>book.publish>=2000 && book.genre=== 'science')
// console.log(newBooks);
// console.log(secBooks);


const myNums=[1,2,3,4,5,6,7,8]

const newNums=myNum.map( (num)=>num*2 ).map((num)=>num+2).filter((num)=>num>5)

console.log(newNums);












 



