// প্রাইম নাম্বার চেক করার ফাংশন
function isPrime(num) {
    if (num === 0 || num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// প্রথম ১০০টি প্রাইম নাম্বার বের করা
let count = 0;
let number = 2;
let primes = [];

while (count < 100) {
    if (isPrime(number)) {
        primes.push(number);
        count++;
    }
    number++;
}

// প্রাইম নাম্বারগুলোর পারস্পরিক distance বের করা
let distances = [];
for (let i = 1; i < primes.length; i++) {
    distances.push(primes[i] - primes[i - 1]);
}

// ফলাফল প্রিন্ট করা
console.log("First 100 prime numbers:", primes);
console.log("Distances between consecutive primes:", distances);
