// function inside function

const app = ()=>{
    const myFunc = ()=>{
        console.log("Hello from my func");
    }

    const add2Num = (num1,num2)=>{
        return num1+num2;
    }
    const mul2Num = (num1,num2)=>num1*num2; //this statement will work since it's a single statement, it will execute without return 
    

    
    console.log("Inside app");
    myFunc();
    console.log(add2Num(2,3));
    console.log(mul2Num(5,2));
}

app();

