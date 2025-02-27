const myObject ={
    name : "Mohan",
    greet : function(){
        console.log(`My name is ${this.name}`);
    }
}

const yourObject = {
    name : "Divya",
};

//myObject.greet();

myObject.greet.call(yourObject); //here we're explicitly passing the context in the call method, so now the context of this will get changed
myObject.greet.bind(yourObject)(); //this is also same as the previous statement, the only diff is that bind returns a new function, that's why I put a bracket after bind to call it
