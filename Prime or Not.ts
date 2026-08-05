function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const num: number = 29;
console.log(num, isPrime(num) ? "is Prime" : "is Not Prime");