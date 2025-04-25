// JS Types Operator

// String, Number, Boolean, Undefined, Null, Symbol, Bigint
// Object, Array, Function

// typeof

let name = "Ariful Islam";
console.log(typeof name);

console.log(typeof 30);

console.log(typeof false);

let height;

console.log(typeof height);

let weight = null;
console.log(typeof null);


let person = {
    name: "Ariful",
};

console.log(typeof person);

console.log(typeof [1,2,3]);

console.log(Array.isArray([1,2,3]))

console.log(typeof function(){});


// instanceof

let arr = [1,2,3,4];

console.log(arr instanceof Object);
console.log(arr instanceof Array);

let date = new Date();
console.log(date instanceof Object);
console.log(date instanceof Date);


let person2 = {
    name: "Rohim"
};

console.log(person2 instanceof Object);
console.log(person2 instanceof Array);
















































































