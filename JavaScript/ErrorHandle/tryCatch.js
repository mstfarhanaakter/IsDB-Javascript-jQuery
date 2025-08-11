// error handing
try {
    const ages = [23, 24, 25, 16, 27, 27];
    function checkAdult(age) {
        return age >= 18;
    }
    console.log(ages.filter(checkAdult));
}
catch (error) {
    console.error("Found a Problem");
}


// filter use 
const ages1 = [23, 14, 15, 16, 27, 28, 29];
console.log(ages1.filter(checkAdult));
// document.write(ages1.filter(checkAdult));
function checkAdult(age) {
    return age >= 18;
}



//chatgpt
function divideNumbers(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both inputs must be numbers.");
        }

        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Calculation attempted.");
    }
}

// ✅ Call the function
divideNumbers(10, 2);    // Output: Result: 5
divideNumbers(10, 0);    // Output: Error: Division by zero is not allowed.
divideNumbers(10, "a");  // Output: Error: Both inputs must be numbers.
