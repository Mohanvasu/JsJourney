const nOfPerson = 4;
let pizzaSize = null;

if(nOfPerson<=2){
    pizzaSize="small";
}else if(nOfPerson<=5){
    pizzaSize="medium";
}else{
    pizzaSize="large";
}

console.log(pizzaSize)