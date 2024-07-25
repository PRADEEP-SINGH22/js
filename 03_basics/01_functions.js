// node 03_basics/01_functions.js


function foo()
{
    console.log(" hello brother ");
}

foo();

function addition(num1 , num2)
{
    console.log( num1 + num2);
}

addition(7 , 8);

function sub(n1 ,n2)
{
    let ans=n2-n1;

    return ans;
}

const result= sub(7,4);

console.log(result);

function f(username)
{
    return ` ${username} is logged in `;
}

console.log(f("pradeep"));