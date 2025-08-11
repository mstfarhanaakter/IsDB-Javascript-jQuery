// 13. Find the maximum number in an array of numbers

let array = [1, 3, 4, 6, 78, 98, 102, 567, 45, 50]
let max = Math.max(...array) 
//Math.max() expects individual numbers — not an array
console.log("Maximum number is " + max)

console.log("🧠 What the spread operator (...) does:"+
"\nIt spreads an array into individual values.")