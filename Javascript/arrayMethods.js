const teas = ["Lemon Tea","Orange Tea","Green Tea","Black Tea"];

const modifiedTeas = teas.map((tea)=>{
    tea = tea.toUpperCase();
    return tea;
})

console.log(modifiedTeas);

//sort teas in descending order of length

teas.sort((a,b)=>{
    return b.length-a.length;
})

console.log(teas);