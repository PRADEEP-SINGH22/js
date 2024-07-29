// node 03_basics/02_scopes.js


let a = 10;
const b = 20;
var c = 30;

if(true)
{
    let a = 90;
    const b = 100;
    var c = 110 ;
}

console.log(a);
console.log(b);
console.log(c);



function one()
{
    let username = " pradeep "

    function two()
    {
        let surname = " chaudhary "

        console.log(username + surname);
    }

    two();


}

one();



if(true)
{
    const num1= 10;

    if(true)
    {
        const num2 = 10;

        console.log(num1 +num2 );
    }
}

