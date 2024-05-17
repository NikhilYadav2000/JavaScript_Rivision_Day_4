// new Keyword

// // Everything is object inside js, even function
// function sum(a){
//     this.a=a; // this is the prototype
//     return a*5;
// }
// console.log(sum(2))
// console.log(sum.add=2);
// console.log(sum.prototype); // {} // by default there are few properties of a method, so when u log prototype the output
// // is {}, prototype is the "this" of  the method.

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){ // prototype provides extra features // so we are making an increment method
    this.score++;
}
createUser.prototype.userMe=function(){
    console.log(`score is ${this.score}`);
}
const a=new createUser("a",1); // adding new keyword bcoz this output wont come
const b=new createUser("b",3);
// now whose score will be incremented between a and b so use this keyword

// dont need to write createUser.prototype.prototype.userMe // dont need to write it 2wice
// just say a.printMe();
console.log(a);
console.log(a.userMe());

// after adding new keyword, everything gets assembled, object is made then all the prorotypes are added, before this all were there but were not together

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/