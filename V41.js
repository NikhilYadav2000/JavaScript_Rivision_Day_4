// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     } // will be called when instance is made of the class
//     encryptPass(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const a=new User("t","t","13");
// console.log(a.encryptPass()); // 13abc
// console.log(a.changeUsername()); // T

// BTS
// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
// }

// User.prototype.encryptPass=function(){ // enjecting as it is also an OBJECT
//     return `${this.password}abc`;
// }

// const b=new User("b","b","2");
// console.log(b.encryptPass()); // 2abc

class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username of parent class is ${this.username}`);
    }
    static returnSomething(){
        return '13';
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
    addCourse(){
        console.log(`Username of child class is ${this.username}`);
    }
}

const user=new User("Nikhil");
user.logMe();
console.log(User.returnSomething()); // 13
// calling the fucntion by class name will work but wont work with the instancce of it.
// user,returnSomething(); // it wont work
const teacher=new Teacher("Nikhil","abc@gmail,com");
teacher.addCourse();

console.log(user instanceof User); // true
console.log(teacher instanceof User); // true