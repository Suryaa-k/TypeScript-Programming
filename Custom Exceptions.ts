// Custom exception class extending Error, with type safety
class InsufficientBalanceException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InsufficientBalanceException";
        Object.setPrototypeOf(this, InsufficientBalanceException.prototype); // fixes prototype chain in TS
    }
}

function withdraw(balance: number, amount: number): void {
    if (amount > balance) {
        throw new InsufficientBalanceException(`Insufficient balance: cannot withdraw ${amount} from ${balance}`);
    }
    console.log("Withdrawal successful");
}

try {
    withdraw(500, 700);
}
catch (e: unknown) {
    if (e instanceof InsufficientBalanceException) {
        console.log("Error:", e.message);
    }
}