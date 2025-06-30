// 11. Calculate the average of the numbers in an array of numbers

var sum = 0
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++ ){
    sum += num[i] / 2
}
console.log("The avarage number of array is " + sum)