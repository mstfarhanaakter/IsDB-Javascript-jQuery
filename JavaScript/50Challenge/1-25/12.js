// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

let array = [1, 2, 3,-4, -5, -6, -7, 8, 9, 10,0]
function getPositiveNumber(arr){
    let positiveNum = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positiveNum.push(arr[i])
        }
    }
return positiveNum;
    
}
console.log(getPositiveNumber(array));
