let a: number = 10, b: number = 0;

try {
    if (b === 0) {
        throw new Error("Division by zero not allowed"); // raise equivalent
    }
    let result: number = a / b;
    console.log("Result:", result);
}
catch (e: unknown) { // except equivalent - typed as unknown for safety
    if (e instanceof Error) {
        console.log("Error:", e.message);
    }
}
finally { // true finally block - always executes
    console.log("Program continues (finally block)");
}