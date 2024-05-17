// const promiseOne=new Promise((resolve,reject)=>{ // promise helps us ti resolve the callback hell
//     setTimeout(()=>{
//         console.log('Async task is complete'); 
//     },1000)
// });
// promiseOne.then(()=>{ 
//     console.log("Promise Consumed"); 
// }); // resolve has connections with then(), values returned from Promise() are entered here

// // Out - Async task is complete

// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// });
// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// });
// // Async task is complete
// // Promise Consumed

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task2")
//     },1000)
// }).then(()=>{
//     console.log("Async resolved2");
// })

// const promiseThree=new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve({userName:"Nikhil",email:"abc@gmail.com"});
//        },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
// }) // { userName: 'Nikhil', email: 'abc@gmail.com' }

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const err=true;
//         if(!err){
//             resolve({userName:"Nikhil",email:"abc@gmail.com"});
//         }else{
//             reject('Err');
//         }
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.userName; // will throw err
// }).then((user)=>{ // as it is giving err so we have to do chaining then(1)'s result will be passed here
//     console.log(user);
// }).catch((err)=>{
//     console.log(err); // err
// }).finally(()=> console.log("Promise is resolved or rejected")); // Promise is resolved or rejected

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const err=false;
//         if(!err){
//             resolve({userName:"Nikhil",email:"abc@gmail.com"});
//         }else{
//             reject('Err');
//         }
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.userName; // will throw err
// }).then((user)=>{ // as it is giving err so we have to do chaining then(1)'s result will be passed here
//     console.log(user);
// }).catch((err)=>{
//     console.log(err); // err
// })
// { userName: 'Nikhil', email: 'abc@gmail.com' }
// Nikhil


// using async/await
// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;
//         if(!err){
//             resolve({username:"js",pass:'123'});
//         }else{
//             reject('err in js');
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive(); // { username: 'js', pass: '123' }

// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=true;
//         if(!err){
//             resolve({username:"js",pass:'123'});
//         }else{
//             reject('err in js');
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(err){
//         console.log(err);
//     }
// }
// consumePromiseFive(); // err in js

// async function getAllusers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         console.log(response);
//         const data=await response.json() // add await aws it will take time for converting to json
//         console.log(data);
//     }catch(err){
//         console.log("err in getAllUsers",err);
//     }
// }
// getAllusers();

// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("error in fetch",err);
// }).finally(()=>{
//     console.log("Successful");
// })

fetch("https://jsonplacelder.typicode.com/users").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error in fetch",err);
}).finally(()=>{
    console.log("Successful");
})
// error in fetch--> then the error-->Successful