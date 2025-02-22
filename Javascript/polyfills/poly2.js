const myCart = [
    {
        productId:1,
        productName:"Laptop",
        productPrice:50000
    },
    {
        productId:2,
        productName:"Mobile",
        productPrice:10000
    },
    {
        productId:3,
        productName:"Tablet",
        productPrice:20000
    }
];

//below is the polyfill for find function
if(!Array.prototype.myFind){
    Array.prototype.myFind = function(userFunction){
        for(let i=0;i<this.length;++i){
            if(userFunction(this[i],i,this)){
                return this[i];
            }
        }
    }
}

const arr = [10,20,30,40];
console.log(arr.myFind((x)=>x%20==0));

//let's write polyfill for reduce function, creating our own reduce function

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userFunction,initialVal){
        for(let i=0;i<this.length;++i){
            initialVal = userFunction(initialVal,this[i],i,this);
        }
        return initialVal;
    }
}

console.log(arr.myReduce((initialVal,currValue)=>initialVal+currValue,0));
console.log(myCart.myReduce((firstProductPrice,currProduct)=>firstProductPrice+currProduct.productPrice,0));

console.log(arr.some((iElement)=>iElement>100));

if(!Array.prototype.mySome){
    Array.prototype.mySome = function(userFunction){
        let result = false;
        for(let i=0;i<this.length;++i){
            if(userFunction(this[i],i,this)){
                result=true;
                break;
            }
        }
        return result;
    }
}

console.log(arr.mySome((x)=>x%30==0));

//let's write polyfill for every method

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(userFunction){
        let result = false;
        for(let i=0;i<this.length;++i){
            if(userFunction(this[i])){
                result=true;
            }else{
                result=false;
            }
        }
        return result;
    }
}

const arr3 = [1,3,11,13,19,21];

console.log(arr3.myEvery((x)=>x%2!=0));