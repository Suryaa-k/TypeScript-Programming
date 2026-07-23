let globalVar: number = 100;

function add(a: number, b: number): number {
    let localVar: number = 10;
    return a + b + localVar - localVar;
}

function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("Add:", add(5, 3));
console.log("Factorial:", factorial(5));
console.log("Global:", globalVar);

// Arrow function with explicit typing
const square = (x: number): number => x * x;
console.log("Square via lambda:", square(4));