let person= {
    name: "John",
    age: 30,
    job: "Developer",
    hobbies: ["reading", "gaming", "hiking"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// let name = person.name;
let name = person["name"];
console.log(name);
person.greet();
person["greet"]();

