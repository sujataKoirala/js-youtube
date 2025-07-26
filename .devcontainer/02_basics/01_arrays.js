 const myArr =[1,2,3,4,5]
 const myArr2=new Array(1,2,3,4)

 myArr.push(6)
 myArr.push(9)
 myArr2.pop()
//  console.log(myArr);
//  console.log(myArr2);
 
 myArr.shift()
//  console.log(myArr)

 const marvel_heros =["thor","ironman","spiderman"];
 const dc_heros=["superman","flash","batman"]

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);

 const allHeros= marvel_heros.concat(dc_heros)
 console.log(allHeros);

 const anotherArray=[1,2,3,4,[5,6,7],4,5,[6,7,8,[5,6]]]
 const another_New_Arr=anotherArray.flat(Infinity)
 console.log(another_New_Arr);
 
 
 