// console.log(Array.prototype.at);

Array.prototype.greet = function(){
    console.log("Hello, Good Morning");
}
const arr1 = [1,2,3,4,5];
// console.log(arr1.greet());

// arr1.forEach((element)=>{
//     console.log(element);
// })  //forEach accepts a function as an argument, it is a higher order function . It doesn't return anything, takes function as an input parameter first parameter is value
// and second parameter is index

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFunction){
        const originalArray = this;
        for(let i=0;i<originalArray.length;++i){
            userFunction(originalArray[i]);
        }
    }
}

// arr1.myForEach((element)=>{
//     console.log(element);
// })

//map polyfill
//return : new array, iterate over each element, userFn

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = [];
        for(let i=0;i<this.length;++i){
            result.push(userFn(this[i],i)); // so as per standard of the map function we should pass the index also as second parameter of user function i.e. userFn
            //but even if we don't pass it will work seamlessly
        }

        return result;
    }
}

const result = arr1.myMap((x)=>x*4);
// console.log(result);

//filter polyfill
const result2 =  arr1.filter((x)=>x%2==0);

//let's write our own polyfill for this 
//map polyfill 

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = [];
        for(let i=0;i<this.length;++i){
            if(userFn(this[i],i,this)){
                result.push(this[i]);
            }
    }
    return result;
}
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr2.myFilter((x)=>x%3==0);
console.log(result3);

//reduce polyfill

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userFn,initialVal){
        for(let i=0;i<this.length;++i){
            initialVal = userFn(initialVal,this[i],i,this);
        }
        return initialVal;
    }
}
const names = ["harshith", "mohan", "yash"];
console.log(names.reduce((totalValue,eachElement)=>totalValue+eachElement.length,0))

console.log(arr2.myReduce((tot,eachElement)=>tot+eachElement,0));





