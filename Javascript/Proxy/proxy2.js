

function negativeIndex(arr){
    return new Proxy(arr,{
        name : "Mohan",
        get(target,prop){
            const index = Number(prop);
            if(index<0){
                return target[target.length+index];
            }
            return target[index];
        },
        set(target,prop,val){
            const index = Number(prop);
            if(index<0){
                target[target.length+index]=val;
            }else{
                target[index]=val;
            }
            return true;
        }
    });
}

const arr =[1,2,3,4,5];

const proxyArr = negativeIndex([...arr]);
console.log(proxyArr[-1]);

proxyArr[-2]=44;

console.log(arr);
console.log(proxyArr);

