//ex1
//var 
var a=10;
if(true){
    console.log(a); // prints 10
}
console.log(a); // prints 10
//var is function-scoped

//let
let b=10;
if(true){
    let b = 20;
    console.log(b); // prints 20
}
console.log(b); // prints 10
//let is block-scoped

//const 
const c=10;
if(true){
    const c = 20;
    console.log(c); // prints 20
}
console.log(c); // prints 10

//ex2 

/*
format des fonction fléchées

const add = (a, b) => {
  return a + b;
};
*/
const add =(a,b)=>a+b;
console.log(add(4,3)); // prints 7


//ex3
const user ={
    name : "Noor",
    age : 10,
    city:"Tunis"
}

let name= user.name;
let age=user.age;
console.log(name);
console.log(age);


//ex4
/*What is ... (spread)?

The spread operator takes an iterable (like an array, string, or object) 
and “spreads” its elements or properties into another array, object, or function call.
*/

//1
let array1 =[1,2,3];
let array2 =[4,5,6];

let array = [...array1,...array2];
console.log(array);

//2

let person = {
    name :'Rayen',
    age : 22
}

let person1 = {...person}
person1.name = 'Messi';
console.log(person1);