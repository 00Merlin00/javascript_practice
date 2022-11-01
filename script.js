const person = new Map();
person.set("firstName", "mohit")
person.set("age", 22)


// console.log(person);
// console.log(person.get("mohit"))

for(let value of person.values()){
    console.log(value);
}
