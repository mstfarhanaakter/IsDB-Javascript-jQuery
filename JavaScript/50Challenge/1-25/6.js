// Calculate 10!
let n = prompt("Enter number of factorial you want: ")
let fact = 1
for (i = 1; i <= n; i++ ){
    fact *=i
}
console.log(`Factorial number is ${fact}`)