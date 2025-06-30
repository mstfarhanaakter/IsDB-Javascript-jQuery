// 15. Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n){
    if (n===0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    else{
        return fibonacci (n-1) + fibonacci (n-2)
    }
}
console.log("7th Fibonacci number is:", fibonacci(10));

