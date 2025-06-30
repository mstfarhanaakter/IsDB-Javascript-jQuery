// 15. Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n){
    if (n===0){
        return 0; // first fibonacci number
    }
    else if (n === 1){
        return 1; // second fibonacci number
    }
    else{
        return fibonacci (n-1) + fibonacci (n-2)
            // fibonacci (n-1) the previous Fibonacci number
            //ibonacci(n - 2) → the one before that
    }
}
console.log("7th Fibonacci number is:", fibonacci(10));

