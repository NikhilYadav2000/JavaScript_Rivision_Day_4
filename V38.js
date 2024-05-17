const user = {
  username: "Nikhil",
  loginCount: 8,
  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
    console.log(this); // info about the invoker
  }, // as there are many uesrname vairables, so which one to choose, use this keyword
};
console.log(user.getUserDetails());
console.log(this); // {} empty here but not in browser console it gives info about window object

// new :  constructor function to create new instances of the object

// const promiseOne=new Promise();
// function only one global execution

function User(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  return this; // gives info, even if u dont write it
}

// const u1 = User(1, 2, 3);
// const u2 = User(4, 5, 6);
// console.log(u1);
/*
a: 4,
b: 5,
c: 6 
*/
// even though we are printing u1 still the values got changed, thats the reason we use new keyword to make new instance of the same object otherwise it will overwrite it

const u1 = new User(1, 2, 3);
const u2 = new User(4, 5, 6);
console.log(u1); // User { a: 1, b: 2, c: 3 }
console.log(u1.constructor); // [Function: User]
console.log(u2); // User { a: 1, b: 2, c: 3 }
console.log(u2.constructor); // [Function: User]



