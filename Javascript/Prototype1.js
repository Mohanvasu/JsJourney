Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    return `Hello ${name}`;
}

greet.describe("Mohan");
greet.describe();
// greet.describe();