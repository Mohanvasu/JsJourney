// const teas = {
//     name : "Lemon Tea",
//     type : "Green",
//     caffeine : "Low"
// }

// teas["origin"] = "China";
// console.log(teas["type"]);
// console.log(teas.origin);

// teas.caffeine="medium";
// console.log(teas.caffeine);

// delete teas.origin; //remove
// console.log(teas);

// //check if teas has origin or not
// console.log("origin" in teas);

// for(let key in teas){
//     console.log(key);
//     console.log(teas[key]);
// }

// const myTeas = {
//     greenTea : {
//         name: "Green tea"
//     },
//     blackTea :{
//         name: "Black Tea"
//     }
// };

// myTeas["blackTea"].name = "Black Tea 1";
// const myTeaCopy = {...myTeas};  //this will create a shallow copy
// console.log(myTeaCopy);

// //deep copy of myTeas
// const myTeaDeepCopy = JSON.parse(JSON.stringify(myTeas));
// console.log(myTeaDeepCopy);

// const myTeaDeepCopy2 = Object.assign({},myTeas);
// console.log(myTeaDeepCopy2);

//Filter polyfill
// Signature : Return new array | Input : userFn
// agar user ka fn true return krta hai, to current value ko new array mein return kr deta hai

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userfn){
        let result = [];
        for(let i=0;i<this.length;++i){
            if(userfn(this[i])){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const arr = [12,24,48,60];

const arr1 = arr.myFilter((x)=>x%12==0);
console.log(arr1);

//polyfill of map, can we use index which is optional  
