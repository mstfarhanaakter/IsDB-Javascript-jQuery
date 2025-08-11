// 18. Print the first 100 prime numbers

// for single prime number

let num = prompt("enter no; ");
let isPrime = true;
if ( num == 0 || num ==1){
    return isPrime = false;
}
for(let i = 1; i < num; i++){
    if (num % i == 0){
        isPrime = false;
        break;
    }       
}

if(isPrime){
    console.log(num, "This is prime number")
}else{
    console.log(num, "This is not prime number")
}

//for first 100 prime number

// Function to check if a number is prime
function Prime(num) {
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
let sum = 0

while (count < 100) {
    if (Prime(number)) {
        console.log(number);
        count++;
    }
    sum++;
}
