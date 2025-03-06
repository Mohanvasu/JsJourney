//Read the contents of file from hello.txt
//Then create a new file named as backup.txt
//Copy the content of hello.txt to backup file
//Delete hello.txt

const { rejects } = require("assert");
const { resolve } = require("path");

// const fs = require("fs");

// console.log("Start of the program");

// fs.readFile("hello.txt",'utf-8',(error,content)=>{
//     if(error){
//         console.log("Error occurred while reading the file.");
//     }else{
//         console.log("Content :",content);
//         fs.writeFile("backup.txt",content,(error)=>{
//             if(error){
//                 console.log("Error occurred while writing the content to a new file");
//             }else{
//                 fs.unlink("hello.txt",(error)=>{
//                     if(error){
//                         console.log("Error occurred while deleting the file");
//                     }else{
//                         console.log("File successfully deleted.");
//                     }
//                 })
//             }
//         })
//     }
// })

//the above code is also called as 'Pyramid of Doom', 'Callback hell'

//we can implement the same using promises

// const fsV2 = require("fs").promises

// fsV2
// .readFile("backup2.txt",'utf-8')
// .then((content)=>{fsV2.writeFile("backup.txt",content)})
// .then(()=>fsV2.unlink("backup2.txt"))
// .catch((error)=>{console.log("Error occurred in the above process, details: ",error)})
// .finally(console.log("Execution completed"));

//let's make our own promisified version of above method

function readFileWithPromise(filePath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(error,content)=>{
            if(error){
                reject();
            }else{
                resolve(content); // this will signal the user's then function to execute 
            }
        })
    })
}

function writeFileWithPromise(filePath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,content,(error)=>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        })
    })
}

function unlinkWithPromise(filePath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filePath,(error)=>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        })
    })
}

readFileWithPromise("backup.txt",'utf-8')
.then((content)=>writeFileWithPromise("backup1.txt",content))
.then(()=>unlinkWithPromise("backup.txt"))
.catch((error)=>{console.log(error)})
.finally(()=>console.log("All done"));



