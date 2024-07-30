// node 03_basics/03_arrows.js
const user = {
    
    username : " pradeep ",
    pincode  : 121001,

    anyuser : function() {

        console.log(` ${this.username} , is my account `);
    }
}

user.anyuser();
user.username = " rajat ";
user.anyuser();



const hello = (num1,num2) => 
{
    return num1+num2;
}

console.log(hello(10,5));






