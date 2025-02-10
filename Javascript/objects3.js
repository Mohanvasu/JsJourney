//objects inside array
//very useful in real world application

const users = [
    {userId:1,firstName : "Harshith",gender:"male"},
    {userId:2,firstName : "Mohan",gender:"male"},
    {userId:3,firstName : "Yash",gender:"male"}
]

const [{userId},,{firstName}] = users; // this is also destructuring of the objects 
//extracting user id of of the user1 and firstName of user 3
const [{userId : user1Id},,{firstName : user1FirstName}] = users;  //here the extra thing that I'm doing is to renaming the variables which I'm extracting  

console.log(user1Id,user1FirstName);

const singHappyBirthday = ()=>{console.log("happy Birthday")};
singHappyBirthday();