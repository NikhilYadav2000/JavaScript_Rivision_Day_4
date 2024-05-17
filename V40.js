// function setUserName(username){
//     this.username = username;
//     console.log("called")
// }
// function createUser(username,email,password){
//     setUserName(username);
//     this.email = email;
//     this.password = password;
// }

// const a=new createUser("a","abc@",123);
// console.log(a);
// createUser { email: 'abc@', password: 123 } 
// called
// call is being made but nothing is getting being set, to set it use call.

// function setUserName(username){
//     this.username = username;
//     console.log("called");
// }
// function createUser(username,email,password){
//     setUserName.call(username); // this will make it run
//     this.email = email;
//     this.password = password;
// }

// const a=new createUser("a","abc@",123);
// console.log(a);
// // called
// // createUser { email: 'abc@', password: 123 }
// as after call end setUserName along with allof its context will get deleted so we have to give reference of the method that is calling it

function setUserName(username){
    this.username = username;
    console.log("called");
}
function createUser(username,email,password){
    setUserName.call(this,username); // this will make it run
    this.email = email;
    this.password = password;
}

const a=new createUser("a","abc@",123);
console.log(a);
// called
// createUser { email: 'abc@', password: 123 } // as we hvae passed "this"  of the calling method so even if the called method get deleted the values will still be retained