let person= {
    name: "John",
    age: 30,
    job: "Developer",
    hobbies: ["reading", "gaming", "hiking"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};


// console.log(person.name);
console.log(person['name']);

// console.log(person.job);
// console.log(person['job']);

person.greet();
person['greet']();