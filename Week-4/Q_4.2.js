//   ES5 VERSION USING FUNCTION KEYWORD

function Person(){

}

Person.prototype.initialize=function(name,age){
    this.name=name;
     this.age=age;
}


Person.prototype.teach= function(subject){
    return `${this.name} is now teaching ${subject}`;
}

function Teacher(){
}

Object.setPrototypeOf(Teacher.prototype,Person.prototype);

const teacher1 = new Teacher();
teacher1.initialize('Abhishek',26);

console.log("**@ teacher 1 is , ",teacher1);
console.log(teacher1.teach('Science'))
 
//   ES6 VERSION , USING CLASS
//  class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// Person.prototype.teach= function(subject){
//     return `${this.name} is now teaching ${subject}`;
// }

// class Teacher extends Person{
//     constructor(name,age){
//         super(name,age);
//     }
// }

// const teacher= new Teacher('test',30);
// console.log("**@ teacher is , ",teacher);
// console.log(teacher.teach('English'));
