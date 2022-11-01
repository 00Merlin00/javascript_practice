function personInfo(){
    console.log( `name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harshit",
    age : 8,
    about : personInfo 
}

const person2 = {
    firstName : "mohit" ,
    age : 21 ,
    about : personInfo 
}

const person3 = {
    firstName : "kittu" ,
    age : 24 ,
    about : personInfo 
}

person3.about();