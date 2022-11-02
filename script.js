class Animals {
    constructor( name , age){
        this.name = name ;
        this.age = age 
    }

    eat (){
        return `${this.name} is eating ` ;
    }

    isSuperCute (){
        return this.age <= 1;
    }

    isCute (){
        return true ;
    }
}

const animal1 = new Animals("tom" , 1);
console.log(animal1);

console.log(animal1.isCute());
console.log(animal1.isSuperCute());




class Dog extends Animals {
    constructor( name , age , speed){
        super (name , age) ;
        this.speed = speed ;
    }

    run(){
       return  `${this.name} runs at ${this.speed}kmph`
    }
    
}

const tommy = new Dog( "tommy", 3, 45);

console.log(tommy);


console.log(tommy.run());

