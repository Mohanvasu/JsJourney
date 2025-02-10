//creating array from string using spread operator

const array1 = [..."123456789"]

console.log(array1);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}
//if you will be having the same key on object 2 also then in the result object the same key with new value will considered
const newObject = {...obj1,...obj2};
console.log(newObject);

//converting a string in a oabject

let obj3 = {..."Mohan"}; //here the keys will be the index of each element in string, and value will be each characters
let obj4 = {...[1,2,3,4,5]};  //make sure the thing which you're using with spread operator should be iterable
console.log(obj3);

console.log(obj4);

const band = {
    bandName : "led zeppelin",
    year : 1969,
    members : ["John","Paul","Ringo","George"]
}
//object destructuring
// const {bandName,year} = band;
// console.log(bandName,year);

//we can even change the values while de structuring the objects

const {bandName,year,...restProps} = band;  //so when you're destructuring the objects make sure the variable name which you're using should be the same as key, the remaining 
//ones you can hold in other
console.log(bandName);
console.log(restProps);
