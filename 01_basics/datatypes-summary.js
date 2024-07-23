// primitive 

// 7 types : string , number , boolean , null , undefined , symbol(unique bnane k liye ) , Bigint 

  const a = 100;
  const b = false;
  let c = " nothing ";

  let d = null;

  let e;

  const id = Symbol('123');

  const bignumber = 1223443222223432;


// reference ( non-primitive )

// array , object , functions 

const hero = ["batman","kaalki"]; //array

{                           // object
    name:"Pradeep "         
    age: 23
}
  

// function declaration
const foo = function()
{
    console.log(" pardeep chaudhary ");
}


// ************************memeory**************************************

// stack is for primitive type
// heap memory is for non-primitive type

let aa = "pradeep ";  //statically

let bb = aa;

bb = "chaudhary ";

aa = " rahul"

console.log(aa);
console.log(bb);

 //dynamically

let user11 ={

  email : "pradeepch",
  password : " *****"
}

let user22 = user11;

user22.email="pradeep";

console.log(user22.email);
console.log(user11.email);

