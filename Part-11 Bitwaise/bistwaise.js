const READ = 1;  // 0001
const WRITE = 2; // 0010
const EXECUTE = 4; // 0100

let userPermission = READ | WRITE; 

console.log(userPermission & READ);   
console.log(userPermission & EXECUTE); 

// দ্রুত গুন এবং ভাগ করা যায়
let num = 5;
console.log(num << 1); // 10 (5 * 2)
console.log(num >> 1); // 2 (5 / 2)