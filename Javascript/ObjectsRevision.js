// let salesData = [
//     {product : "Laptop", price: 1200},
//     {product : "Smartphones", price: 800},
//     {product : "Headphones", price: 150},
//     {product : "Keyboard", price: 80}
// ];

// let totalSales = salesData.reduce((totalSales,item)=>totalSales+item.price,0);
// console.log(totalSales);

// let inventory = [
//     {name : "Widget A",stock: 30},
//     {name : "Widget B",stock: 120},
//     {name : "Widget C",stock: 45},
//     {name : "Widget D",stock: 70},
// ];

// let lowStockItems = inventory.filter((item)=>item.stock<50);
// let lowStockItems2 = inventory.map((item)=>{if(item.stock<50){if(item!=undefined){
//     return item;
// }}}).filter((item)=>item!=undefined);
// ;

// console.log(lowStockItems);
// console.log(lowStockItems2);



// find the most active user
let mostActive = {};

let mostActiveUser = userActivity.reduce((mostActive,user)=>{
    return mostActive.activityCount<user.activityCount ? user : mostActive;
},userActivity[0]);

// console.log(mostActiveUser);
let userActivity = [
    {user : "Alice",activityCount: 33},
    {user : "Bob",activityCount: 22},
    {user : "Charlie",activityCount: 55}
];
let currMax = userActivity[0];
console.log(currMax);
let mostActiveUser2 = userActivity.map((user)=> {currMax = user.activityCount>currMax.activityCount ? user : currMax});

console.log(mostActiveUser2);