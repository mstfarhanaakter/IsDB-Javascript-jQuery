// Calculate 10!
n = prompt("Enter number of factorial you want: ")
fact = 1
for (i = 1; i <= n; i++ ){
    fact *=i
}
console.log(`Factorial number is ${fact}`)