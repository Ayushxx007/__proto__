const obj={
  name:"ayush",
  age:"26",
  gender:"male",

  xyz:function(){
    console.log("this is xyz function");
  }
  


}

console.log(obj); 

// obj.__proto__ is =Object.prototype and obj.__proto__.__proto__=null.   this is prototypal chain 
// obj inherits all property from obj.__proto__ which is equal to Object.prototype
// Object.prototype.__proto__=null

let arr=[1,2,3,4,5,6];
console.log(arr);
// arr.__proto__=Array.prototype and arr.__proto__.__proto__=Object.prototype


let string="mahika"; 
console.log(string);
// string.__proto__=String.prototype and string.__proto__.__proto__=Object.prototype   


let m =false;
console.log(m);
// m.__proto__=Boolean.prototype and m.__proto__.__proto__=Object.prototype


let n=5;
console.log(n);
// n.__proto__=Number.prototype and n.__proto__.__proto__=Object.prototype

let q=new Date(); 
console.log(q);
// q.__proto__=Date.prototype and q.__proto__.__proto__=Object.prototype

let set=5;
console.log(set);
// set.__proto__=Number.prototype and set.__proto__.__proto__=Object.prototype

let map=new Map();
console.log(map);
// map.__proto__=Map.prototype and map.__proto__.__proto__=Object.prototype






let obj2={
  name:"mahika",
  age:"26",
  gender:"female",

}

obj2.__proto__=obj;
console.log(obj2);
//now obj2.__proto__=obj and the chain goes on
//obj2__proto__.__proto__=obj._proto__
// obj.__proto__ is =Object.prototype and obj.__proto__.__proto__=null.




let obj3=Object.create(obj2);
console.log(obj3);
// obj3__proto__=obj2 and obj2__proto__=obj and the chain goes on









