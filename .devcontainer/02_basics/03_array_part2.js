// constructor or singleton

const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.name="sujata"
tinderUser.id="suj123"
tinderUser.isLoggedin=false;
// console.log(tinderUser);

const details={
    name:"sujata",
    username:{
       firstname:"sujata",
       lastname:"koirala"
    },
    age:21

}

// console.log(details.username.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);


  const course={
    name:"javascript",
     courseinstructor:"hitesh",
     platform:"youtube"
  }

  const{platform} = course
  console.log(platform);

  const {courseinstructor:instructor}=course
  console.log(instructor);
    




