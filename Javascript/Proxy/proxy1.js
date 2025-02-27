const user = {
    name : "Mohan",
    age :23,
    password :"123"
};

// const proxyUser = new Proxy(user,{
//     get(target,prop){
//         console.log(prop);
//         if(prop==="password"){
//             throw new Error("Access Denied");
//         }
//         return target[prop];
//     }
//     set(target,prop,value){
//         //yet to complete
//         return true;
//     }
// });

// console.log(proxyUser.password);