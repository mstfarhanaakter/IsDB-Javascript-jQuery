// Create a function that will receive an array of numbers as argument 
// and will return a new array with distinct elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = getDistinctElement(numbers)
console.log(result)

function getDistinctElement(numbers){
    let unique = []
    for(let num of numbers){
        if(!unique.includes(num)){
            unique.push()
        }
    }
    // return unique
     return [...new Set(numbers)];
}

