const person = {
    x:10,
    firstName: "Mohan",
    lastName: "Vasu",
    age: 23,
    hobbies : ["coding", "music", "gym"],
    isMarrierd: false,
    getFullName: function(){
        return this.firstName+this.lastName;
    },
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
}

let person2 = {
    ...person //doesn't work for inner objects/ Array : Shallow copy
}

console.log(person2);

person["profile"] = "Software Engineer";

console.log(person.lastName)
console.log(person.getFullName());
console.log(person.profile)
console.log(person.address.city)
