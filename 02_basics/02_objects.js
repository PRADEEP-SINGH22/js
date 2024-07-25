// node 02_basics/02_objects.js

// object literals 

const personal = {

    name : " pradeep ",
    roll : 232023022,
    mobile : 92829297873,
    email : " pradeepch@gmail.com",
    age : 23
}

// console.log(personal);

// console.log(personal.name);
// console.log(personal["name"]);

personal.name = " pradeep chaudhary ";

// console.log(personal);

// Object.freeze(personal);
personal.age = 24;

// console.log(personal);

personal.foo = function()
{
    console.log(`this is my name, ${this.name}`);
}

// console.log(personal.foo());

// singleton 

const tinder = new Object();

tinder.id = "12345";
tinder.name = " rahul ";
tinder.age = 26;

// console.log(tinder);

const customer = {

    name: "happy ",
    
    address : {

        city: "faridabad",
        code: 121001
    }
}

// console.log(customer.address);

// const add = Object.assign(tinder,customer);
const bdd = { ...tinder,...customer };

// console.log( add);
// console.log( bdd);

const complete = [

    {
        id: 1,
        islog: false
    }

    ,

    {
        id:2,
        islog: true
    }
]

// console.log( complete[0]);


// {
//     "name": " pradeep ",
//     "age": "23",
//     "mobile": "9654056896"
// }

[
    {

    },
    {

    },
    {

    }
]









