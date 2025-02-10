let array1 = ["item 1", "item 2", "item 3", "item 4", "item 5"];
let array2 = [...array1]; //using spread operator to copy elements of array1 into array2

// let array3 = array1.slice(0);

// array1.push("item 6");
// console.log(array1);
// console.log(array2);
// console.log(array3);

// let array4 = [...array1].concat(["item7","item8"]); both works, below one is also fine
let array4 = [...array1].concat("item7","item8");
//another way
let array5 = [].concat(array1,"item7","item8");
let array6 = [...array1,"item7","item8"];
let array7 = [...array1,...array6];
console.log(array7);

// console.log(array6);
// console.log(array4.length);