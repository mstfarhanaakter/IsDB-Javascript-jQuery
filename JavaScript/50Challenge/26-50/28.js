// Calculate the sum of first 100 prime numbers and return them in an array


//for first 100 prime number
// Function to check if a number is prime
function isPrime(num) {
    if (num === 0 || num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Main logic to print the first 100 prime numbers
let count = 0;
let number = 2;
let primes = [];
let sum = 0;

while (count < 100) {
    if (isPrime(number)) {
        primes.push(number);  // প্রাইম অ্যারেতে যোগ করো
        sum += number;        // প্রাইম যোগফলে যোগ করো
        count++;
    }
    number++;
}

console.log("First 100 prime numbers:", primes);
console.log("Sum of first 100 prime numbers:", sum);
