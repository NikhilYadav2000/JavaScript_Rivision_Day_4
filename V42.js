const descripter=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false, // it is false, so u cant overwrite it
  enumerable: false,
  configurable: false
}
*/
console.log(Math.PI); // 3.14
// Math.PI=5; // cant change it

const Nikhil={
    profession:"Film-Maker",
    mortal:"Yes",
    callme:()=>{
        console.log("call me daddy!!!");
    }
}
console.log(Object.getOwnPropertyDescriptor(Nikhil,"profession"))
/*
{
    value: 'Film-Maker',
    writable: true,
    enumerable: true,
    configurable: true
}
*/
Object.defineProperty(Nikhil,"profession",{
    writable:false,
    // if u do enumerable:false then u wont be able to print profession but will print otherthings obviously, enumerable means iterable
})

console.log(Object.getOwnPropertyDescriptor(Nikhil,"profession"))
/*
{
  value: 'Film-Maker',
  writable: false,
  enumerable: true,
  configurable: true
}
*/

// for(const [key,value] of Nikhil){
//     console.log(`${key}-->${value}`);
// } // objects are not iterable m

// for(const [key,value] of Object.entries(Nikhil)){
//     console.log(`${key}-->${value}`);
// } 
// profession-->Film-Maker
// mortal-->Yes
// callme-->()=>{
//         console.log("call me daddy!!!");
//     }

for(const [key,value] of Object.entries(Nikhil)){
    if(typeof value !== 'function'){
        console.log(`${key}-->${value}`);
    }
} 