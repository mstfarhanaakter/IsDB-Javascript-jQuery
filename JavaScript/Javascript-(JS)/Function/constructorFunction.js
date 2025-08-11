//construcotes vs regular function: 
// constructors are intended for creating objects, 
// while regular functions perform specific tasks.


// Constructor Function
 //নতুন object তৈরি করা

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name + " and age " + this.age)
    }
}

// new object creat with new keyword with function name-
let person1 = new Person("Liza", 32);
let person2 = new Person("Farhana", 25);
let person3 = new Person("Sobita", 24);
person1.greet(); // function call
person2.greet(); // function call
person3.greet(); // function call


//Regular Function
//কোনো নির্দিষ্ট কাজ করা

function car(a, b) {
    this.name = a;
    console.log(a)
}
car("Audi")