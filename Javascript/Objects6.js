const obj ={
    username: "mohan vasu",
    password: "1234"
}

const obj2 = {
    ...obj
}

// console.log(obj2);
// obj2.key1 = "value1";
// console.log(obj2);
const result = [];

for(key of Object.keys(obj2)){
    result.push([key,obj2[key]]);
    console.log(`${key} : ${obj2[key]}`);
}

console.log(result);

const obj3 = {
    name : {
        firstName : "Mohan",
        lastName : "Prajapati"
    },
    address : {
        flatNbr : "11B",
        block : "Maple",
        society :  "Regency Pinnacle Heights"
    },
    bike : "CB 350RS"
}

const obj4 = JSON.parse(JSON.stringify(obj3));
console.log(obj3 === obj4);

console.log(obj4);

console.log("abc.xyz".split("."))

// search for nested keys

const obj5 = {
    name : "Mohan",
    address : {
        flatNbr : "11B",
        block : "Maple",
        society :  "Regency Pinnacle Heights"
    },
    bike : "CB 350RS"
}

console.log(obj3.hasOw)