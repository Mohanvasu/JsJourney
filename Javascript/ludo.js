console.log(Math.round(Math.random()*6))

// const ludo = function(){
//     return Math.round(Math.random()*6);
// }

function check(value){
    if(value){
        console.log("Truthy value");
    }else{
        console.log("Falsy value");
    }
}

check(0);
check("");
check(null);
check(undefined);
check(NaN);
check({});
check([]);
check(5);
check(-5);
check(4.5);
check(true);
check(false);
check("Hello");

let salesData = [
    {product :  "Laptop", price : 50000},
    {product :  "Mobile", price : 10000},
    {product :  "Tablet", price : 20000},
    {product :  "Monitor", price : 30000}
]

let userActivity = [
    {user : "Alice",activityCount: 33},
    {user : "Bob",activityCount: 22},
    {user : "Charlie",activityCount: 55}  
]

//most active user
let initialValue=userActivity[0].activityCount;
let mostActiveUser = userActivity.reduce((maxUser,user)=>(maxUser>user.activityCount ? maxUser : user),initialValue);  //initial is optional, if we don't specify then initial will be arr[0]

console.log(mostActiveUser);