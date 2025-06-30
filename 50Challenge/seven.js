// 7. Calculate the sum of even numbers greater than 10 and less than 30
sum = 0;
for (i = 11; i < 30; i++){
    if( i % 2 == 0){
        sum +=i
    }
}
console.log(`Sum of even numbers between 10 and 30: ${sum}`)