// Same arrow function syntax, with explicit typing
const square = (x: number): number => x * x;
const add = (a: number, b: number): number => a + b;

console.log("Square:", square(5));
console.log("Add:", add(3, 4));

let factor: number = 10;
const multiplyByFactor = (x: number): number => x * factor;
console.log("Multiply:", multiplyByFactor(5));