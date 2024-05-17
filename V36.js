// prototype
// if we want our own made features accesible in functions or arrays just inject it inside OBJECT, as everything in js is an object only.


let Hero={
    thor:"hammer",
    spiderman:"sling",
    getSpider:()=>{
        console.log(this.spiderman);
    }
}
console.log(Hero.getSpider)


// injecting a new feature in Object
Object.prototype.Nikhil=()=>{ // it's a function so write Hero.Nikhil()
    console.log("I'm Omnipotent");
}

Hero.Nikhil(); // I'm Omnipotent 

//
let myHeroes=["batman","Spidie"];
myHeroes.Nikhil(); // I'm Omnipotent

//  we just added a new property inside the top level (Object)

// Now checking if we add a feature inside array will it be present inside function also as they are siblings below the main Object
Array.prototype.Tanya=()=>{
    console.log("Tanya");
}

myHeroes.Tanya(); // Tanya 
// Hero.Tanya(); //  it will fail as object does not have the property of the array

// inheritance
const a={
    name:"Nikhil",
}
const b={
    email:"abc@gmail.com"
}
const c={
    address:"subhash nagar"
}
b.__proto__=a;
console.log(b.name); // Nikhil
// new way to write it
console.log("");
Object.setPrototypeOf(c,b);
console.log(c.address);
console.log(c.email);
console.log(c.name);
/*
subhash nagar
abc@gmail.com
Nikhil
*/

let chai="chai     ";
String.prototype.trueLength=function(){
    console.log(`${this}`); // chai // name of the caller
    console.log(`${typeof this}`); // object, though a string is hierarchy starts from object only
    console.log(`${this.name}`); // undefined // obselete property 
    console.log(`length is ${this.length}`); // length is 9
    console.log(`actual length is ${this.trim().length}`); // actual length is 4
}
chai.trueLength();
console.log("");
"Nikhil           ".trueLength();
/*
Nikhil   
object
undefined
length is 17
actual length is 6
*/