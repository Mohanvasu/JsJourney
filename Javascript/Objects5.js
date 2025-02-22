class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const p1 = new Person("Mohan","Vasu");
const p2 = new Person("Yash","Pandey");

console.log(p1.getFullName());
console.log(p2.getFullName());

class P{

}
const p3 = new P();

console.log(p3);