// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

let fruits1 = ["apple", "banana", "coconut", 'date']
let fruits2 = ["banana", "date"]
function arrayDifference(arr1,arr2){
    return arr1.filter(item => !arr2.includes(item) ) 
    //item-এর জায়গায় যেকোনো নাম ব্যবহার করা যেত like fruit
}
const result = arrayDifference(fruits1, fruits2)
console.log(result)