//-----------------VAR VS LET----------------------------//

for (var i = 1; i <= 10; i++) {
  console.log("Hello World", i);
}

for (let t = 1; t <= 5; t++) {
  console.log("Now I am learning JavaScript", t);
}

//----------------ARROW FUNCTION---------------------------//

const isSumEven = (num1, num2) => {
  const sum = num1 + num2;
  return sum % 2 === 0;
};
// isSumEven(10,12)
console.log(isSumEven(10, 23));
// console.log("hello there")

//----------------TEMPLATE STRING---------------------------//

const name1 = "Farhana";
const age = 25;
const city = "Bogura";

const all = `My name is ${name1}. I am ${age} years old. And I am come from ${city}.`;
console.log(all);

//----------------DEFAULT PARAMETER-----------------------------//

function cityName(name, city = "Bangladesh") {
  return `I am ${name} and I am from ${city}`;
}

console.log(cityName("Alice", "New York"));
console.log(cityName("Bob"));

//-----------------DESTRUCTURING----------------------------//

const student = { id: 101, name: "Arafat", dept: "CSE" };
const { id, name, dept } = { id: 101, name: "Arafat", dept: "CSE" };

console.log(id); // 101
console.log(student.id); // 101
console.log(student.name);
console.log(name);

//---------------SPREAD OPERATOR---------------------------//

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merge = [arr1, arr2]; // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
const merge1 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]

console.log(merge);
console.log(merge1);

//-----------------------For of array loop---------------------//

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}

//----------------------For of for string loop---------------------//

const text = "JavaScript";
for (char of text) {
  console.log(char);
}

// ----------------------For in loop-----------------------//

const person = { name: "Alice", age: 25, city: "Dhaka" };

for (const info in person) { // it will give just the key

  const value = person[info]; // it will give just the value of keys
  console.log(`${info}: ${value}`); // it must have to define to the keys and value
  
}

//-----------------Keys, Values, and Entries---------------//

const person1 = { name: "Alice", age: 25, city: "Dhaka" };

const keys = Object.keys(person1);
const values = Object.values(person1);
const entries = Object.entries(person1);

console.log(keys);
console.log(values);
console.log(entries);

//-----------------Freeze, Seal, Delete-------------------------//

const employee = {
  name: "farhana",
  id: 187997,
  role: "dev",
};

// const freeze = Object.freeze(employee) // can not be modify, creat, and delete
const seal = Object.seal(employee); // just modify the existing one

employee.location = "Dhaka"; // ❌ won't be added
delete employee.id; // ❌ won't be deleted
console.log(employee);
