//polyfill of forEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callBack){
        for(let i=0;i<this.length;++i){
            callBack(this[i],i);
        }
    }
}

const arr = [1,2,3,4];

arr.myForEach((val,i)=>console.log(`Value at ${i} is ${val}`));
const res = arr.map((i)=>i*2);

console.log(res);

//polyFill of map

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callBackFn){
        let res = [];
        for(let i=0;i<this.length;++i){
            res.push(callBackFn(this[i],i));
        }
        return res;
    }
}

function operation(x){
    return x*11;
}
const res2 = arr.myMap(operation);

console.log(res2);

//polyfills of reduce

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callBackFn, initialVal){
        if(this==null){
            throw new TypeError("Array.prototype.myReduce is called on null or undefined");
        }
        if(typeof callBackFn!=='function'){
            throw new TypeError(`${callBackFn} is not a function`);
        }
        let acc = initialVal || this[0];
        let startIndex = initialVal ? 0 : 1;
        for(let i=startIndex;i<this.length;++i){
            acc = callBackFn(acc,this[i]);
        }
        return acc;
    }
}

const result4 = [1,2,3,4,5].myReduce((acc,currVal)=>acc*currVal);
console.log(result4);