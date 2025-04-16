// JavaScript Ternary Operators
// Condition ? true : false;

let age = 23;

let getMaddid = age >= 21 ? "You Get Meddid" : "You Get Not Meddid";

console.log(getMaddid);


// Nullish Coalescing Operator
// null|undefined??"Hello";

let grid = null ?? "Jorina";

console.log(grid);

// Optional Chaining Operator
// object?.property;

let jorina = {
    name: "Jorina",
    eye: "yes eye",
};

let bodyParse = jorina?.eye;

console.log(bodyParse);