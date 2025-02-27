const obj = {
    name : "Mohan",
    sayHello : function(){
        console.log(`Hello ${this.name}`);
    }
};

// console.log("Start of the function");

// setTimeout(() => {
//     console.log("Part of settimout");
// }, 5 * 1000);

// console.log("End of the function");

// console.log("Start of the function");

// setTimeout(() => {
//     console.log("Part of settimout");
// }, 0 * 1000); //setTimeout function is not part of javascript, it's part of browser. So whenever we execution comes to this line, a clock will start in the browser
// // and as soon as the timer ends then it will be pushed in callback queue. Since javascript gives priority to the call stack and it doesn't wait for anyone the other
// //line will be executed. So there is a event loop that keeps in checking if the call stack is empty or not, if it empty then only the callback queue part will be pushed into
// //the call stack and then it will be executed. That's why setTimeout is coming at the end after all the lines.


// console.log("End of the function");


//Example 2
// console.log("Start of the execution");

// setTimeout(obj.sayHello,3*1000); //this will give 'Hello undefined' because by the time this statement will reach to call stack the scope of obj would already been over
// //that's why it is coming as undefined

// console.log("End of execution");


//Example 3 : Solution of the Example 2 issue
// Solution : we can bind the object while calling the sayHello function using bind function

console.log("Start of execution");

setTimeout(obj.sayHello.bind({name: "Hellow Divya"}),3*1000);

console.log("End of the conversation");