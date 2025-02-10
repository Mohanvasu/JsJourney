
function myFunc(a,b,c,...d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);//here d will be an array, d is rest parameter here
}

myFunc(3,4,5,6,7,8,9);

function add(...p){
    let total =0;
    for(let val of p){
        total+=val;
    }
    return total;
}

console.log(add(1,2,3,4,5,6));
