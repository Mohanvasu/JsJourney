// let expenses = [
//     {description: "Groceries", amount: 50,category: "Food"},
//     {description: "Electricity Bill", amount: 100,category: "Utilities"},
//     {description: "Dinner", amount: 30,category: "Food"},
//     {description: "Internet Bill", amount: 50,category: "Utilities"},
//     {description: "Groceries", amount: 50,category: "Food"},
// ]


// let expenseReport = expenses.reduce((report,expense)=>{
//     if(!report[expense.category]){
//         report[expense.category]=expense.amount;
//     }else{
//         report[expense.category]+=expense.amount;
//     }
//     return report;
// },{});

// console.log(expenseReport);

// let tasks = [
//     {description: "Write report", completed : false, priority: 2},
//     {description: "Send email", completed : true, priority: 1},
//     {description: "Prepare ppt", completed : false, priority: 1},
//     {description: "Go to Gym", completed : true, priority: 2},
// ]

// let result = tasks.filter((task)=>{
//     return task.completed;
// });

// console.log(result.sort((a,b)=>b.priority-a.priority));



let result = {};

// let movieAvgRating = movieRatings.map((movie)=>{
//     movie.ratings = (movie.ratings.reduce((totalAvg,rating)=>totalAvg+rating,0))/(movie.ratings.length);
//     return movie;
// });
let movieRatings = [
    {title: "Movie A", ratings : [4,5,6]},
    {title: "Movie B", ratings : [5,5,4]},
    {title: "Movie C", ratings : [3,4,2]},
]

result = movieRatings.map((movie)=>{
    title = movie.title;
    rating = movie.ratings.reduce((totalAvg,rating)=>totalAvg+rating,0)/(movie.ratings.length);
    return {title,rating};
});


console.log(result);
console.log(movieRatings);