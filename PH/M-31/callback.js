//--------------------CallBack Function---------------------------------//

function sum(a, b, callback){
    const result = a + b
    return callback (result, a, b)
    
}
    function multiple(sum, a, b){
        return a * b
}

console.log(sum(2, 4, multiple))

//-----------------------------------------------------//

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
greet("Farhana", () => {
    console.log("welcome to the JavaScript")
})

//----------------------------------------------//

function calculate(x, y, callback) {
    console.log("Hey buddy");
    return callback(x, y);  // callback এ x, y পাঠালাম
}

calculate(5, 6, (a, b) => {
    console.log(`Total multiple number is ${a * b}`);
    return a * b;
})


// -----------------pass by value----------------------//

let num = 10;
let newNum = num;
    num = 20; 
console.log(num)
console.log(newNum)

//---------pass by reference-----------------//

let obj = {
    name: "Farhan",
    age: 25, 
    city: "Dhaka"
}

let obj1 = obj

    obj1.name= "shetu"
console.log(obj1)

//------------------Truety vs Falsy------------------------//

console.log(Boolean(""));  // empty string always false
console.log(Boolean("Farhana")); // non-empty string always true
console.log(Boolean("0")); // It is considered as string so, it is true
console.log(Boolean(0)); // in Js 0 means False
console.log(Boolean([])); // empty array true
console.log(Boolean({})); // empty object true


//---------------------------------------------//

let x = 5; // Global scope
function num(x){
    return x;
}

console.log(num(x))  

function name(){
    let y = "Farhana";
    console.log(`My name is ${y}`)
    return y;
}
name()


