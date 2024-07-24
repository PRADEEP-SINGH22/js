// node 02_basics/01_arrays.js

const arr = [1,2,3,4,5];

const brr = ["a" , "b" ,"c" ,"d" , "e"];

// console.log( arr[3]);
// console.log( brr[2]);



arr.push(6);
brr.push("f");

// console.log( arr[5]);
// console.log( brr[5]);

arr.pop();
brr.pop();

// console.log( arr[5]);
// console.log( brr[5]);

// console.log( arr.length);
// console.log( brr.length);

arr.unshift(10);
// console.log( arr);

arr.shift();
// console.log( arr);

const a = arr.slice(1,3);
// console.log( a);
// console.log( arr);

const b = arr.splice(1,3);
// console.log( arr);
// console.log( b);

const aa = [1 ,2,3,4,5];
const aaa = [1 ,2,3,4,5];


const bb = [" a "," b "," c "," d "," e "];
aa.push(bb);
// console.log(aa);


const cc = [" a "," b "," c "," d "," e "];
const second = aaa.concat(cc);
// console.log(second);

const p = [3,4,5,6,7,8];

const q = [2,3,45,65,2,3,2,2];  

const r = [...p,...q];  //slice method

// console.log(r);

const w =[1,2,3,[4,3,4,[5,6,7],7],[76]];

console.log(w.flat(10));




















