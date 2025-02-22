const users = [
    {firstName : "harshit",age:23},
    {firstName : "mohan",age:21},
    {firstName : "yash",age:22},
    {firstName: "Yashika",age:20}
];

users.forEach((user)=>console.log(user.firstName));
//forEach accepts a function as an argument, it is a higher order function . It doesn't return anything, takes function as an input parameter first parameter is value
//and second parameter is index 

const  userCart = [
    {productId : 1,productName : "mobile",price : 12000},
    {productId : 2,productName : "laptop",price : 22000},
    {productId : 3,productName : "tv",price : 32000},    
    {productId : 4,productName : "fridge",price : 42000},
    {productId : 5,productName : "washing machine",price : 52000}
]

const cartTotal = userCart.reduce((total,currentProduct)=>total+currentProduct.price,0);

console.log(cartTotal);

