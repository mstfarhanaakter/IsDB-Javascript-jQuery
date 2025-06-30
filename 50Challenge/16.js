// 16. Create a function that will return a Boolean specifying if a number is prime

var num = parseInt(prompt("Enter Your Number: "))
var isprime = true;

if (num <= 1){
    isprime = false;
}

for (let i = 2; i < num; i++){
    if (num % i == 0){
        isprime = false;
        break;
    }
}

if(isprime){
    console.log(`${num} is a prime number.`)
}
else{
    console.log(`${num} is not a prime number.`)
}