//8. Create a function that will convert from Celsius to Fahrenheit

function Celsius(){
    console.log("Celsius to Fahrenheit")
}

Celsius();

function celToFah(celsius){
    let fahrenheit = (celsius  * 9/5) + 32
    console.log(`${celsius}°C = ${fahrenheit}°F`)
}
celToFah(25);

