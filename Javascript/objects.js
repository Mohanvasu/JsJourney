const person = {
    "firstName":"Mohan",
    lastName:"Vasu",
    age:23,
    "Hobbies": ["coding", "music", "gym"],
    isMarrierd: false
}
//both are going to give same output, it's just different syntax of achieving same thing
// console.log(person.firstName);
// console.log(person["firstName"]);

//.operator is not going to work in case you have a key as "full address", you can't access this because it has space in between
//so in this case you have to use double quotes

person["full address"]= "Bangalore, Karnataka";
// console.log(person["full address"]);

const key = "email";


//the below two assingment of person[key] and person[key] = "mohan123@gmail.com" are  not same, when you're assigning using . operator it is not computing the value kep inside key
//but when I'm using inside [key], it is trying to compoute the value of vriable key
person.key = key;
// console.log(person);

person[key] = "mohan123@gmail.com";
// console.log(person);

//ways of iterating over an object
//1. using for in loop

// for(let key in person){
//     console.log(key);
//     console.log(person[key]); //can't use . operator here
// }

//2. using Object.keys() : this is will return array of keys

for (let key of Object.keys(person)){
    console.log(`${key} : ${person[key]}`);
}

const key1 = "ObjectKey1";
const key2 = "ObjectKey2";

const value1 = "ObjectValue1";
const value2 = "ObjectValue2";

const obj1 = {};

obj1[key1]=value1;
obj1[key2]=value2

console.log(obj1);

//or

const obj2 = {
    [key1] : value1,
    [key2] : value2
}
//whenever we're going to use square brackets like [], it's going to take the computed value for key which is ObjectKey1 and ObjectKey2

console.log(obj2);