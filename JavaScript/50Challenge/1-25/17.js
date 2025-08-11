// 18 .Calculate the sum of digits of a positive integer number

let num = parseInt(prompt("Enter Number: "));
let sum = 0;

while(num >0){
    sum += num % 10;  // Get the last digit
    num = Math.floor(num / 10); // Remove the last digit
}
console.log("sum of digit = ", sum) //456 = 15 (4 + 5 + 6)