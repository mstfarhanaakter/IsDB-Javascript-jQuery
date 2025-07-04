// 14. Print the first 10 Fibonacci numbers without recursion

let num = prompt("Enter Your Fibonacci Number: ")
let first = 0;
let second = 1
for (i = 1; i <= num; i++){
    console.log(first);
    let next = first + second
        first = second
        second = next
}

