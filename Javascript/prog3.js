const arr = ['item1','item2','item3','item4'];
let [item1,item2] = arr; //this is called array destructuring

console.log(item1);
console.log(item2);
// in case we have less elements mentioned while destructuring than the number of elements of array then the remaining elements will remain as it is in the array
// only the mentioned elements will be extracted, it won't throw an error also

const arr2 = ['item1','item2','item3','item4'];
let [item4,item5,...item3] = arr2; //this is called array destructuring

const arr1 = [1,2,3,4,5];

let [a,,c] = arr1; // here by using this method we can skip elements

console.log(a);
console.log(c);
