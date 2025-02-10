//hoisting

hello();  //we can call the function before declaring it, but it will only work in function definition not with function expression

function hello(){
    console.log("Hello world");
}

// hello1();  // this won't work because hello1 is function expression

// const hello1 = function(){
//     console.log("Hello world 2");
// }