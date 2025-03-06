function increment() {
    let count =0;
    return function(){
        count+=1;
        return count;
    }
}

const inc = increment();;
console.log(inc());
console.log(inc());
console.log(inc());