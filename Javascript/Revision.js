// let expense = [
//     {description: "Groceries", amount: 50,category: "Food"},
//     {description: "Electricity", amount: 100,category: "Utilities"},
//     {description: "Dinner", amount: 30,category: "Food"},
//     {description: "Internet", amount: 50,category: "Utilities"},
// ]

// console.log("Expense Report");



// console.log(expense);
// let expenseReport = expense.reduce((expenseReport,expense)=>{
//     if(!expenseReport[expense.category]){
//         expenseReport[expense.category] = expense.amount;
//     }else{
//         expenseReport[expense.category] += expense.amount;
//     }
//     return expenseReport;
// },{});

// console.log(expenseReport);



// let tasks = [
//     {description: "Write report", completed : false, priority: 2},
//     {description: "Send email", completed : true, priority: 3},
//     {description: "Prepare ppt", completed : false, priority: 1},
// ];

// let pendingTasks =  tasks.filter((task)=>!task.completed).sort((a,b)=>b.priority-a.priority);

// console.log(pendingTasks);

let movieRatings = [
    {title: "Movie A", ratings : [4,5,3]},
    {title: "Movie A", ratings : [5,5,4]},
    {title: "Movie A", ratings : [3,4,2]},
];

let avgRating = [];

avgRating = movieRatings.reduce((avgRating,movieRating)=>{
    if(!avgRating[movieRating.title]){
        avgRating.title=movieRating.title;
        avgRating.rating = (movieRating.ratings.reduce((accum,rating)=>accum+rating,0))/(movieRating.ratings.length);
    }
},avgRating);

console.log(avgRating);