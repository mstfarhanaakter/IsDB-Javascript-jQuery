const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 },
];

const Name = users.map((x) => x.name);
console.log(Name); // Alice, bod, charlie

//-------------------------------------------//

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Pen", price: 2 },
];

const lessthan100 = products.filter((x) => x.price < 100);
console.log(lessthan100); //[ { id: 3, name: 'Pen', price: 2 } ]

//----------------------------------------------//

const students = [
    { id: 1, name: "David", grade: "A" },
    { id: 2, name: "Eve", grade: "C" },
    { id: 3, name: "Frank", grade: "B" },
];

const findGradeB = students.find((x) => x.grade == "B");
console.log(findGradeB); // { id: 3, name: 'Frank', grade: 'B' }

//-----------------------------------------------//

const books = [
    { title: "Book One", pages: 200 },
    { title: "Book Two", pages: 150 },
    { title: "Book Three", pages: 300 },
];

const titleWithCount = books.map((x) => `${x.title}-${x.pages} pages`);
console.log(titleWithCount); //[ 'Book One-200 pages', 'Book Two-150 pages', 'Book Three-300 pages' ]

//-----------------------------------------------//

const employees = [
    { id: 1, name: "Sam", salary: 5000 },
    { id: 2, name: "John", salary: 7000 },
    { id: 3, name: "Sara", salary: 4000 },
];

const increaseSalary = employees.map((x) => x.salary + (x.salary * 10) / 100);
console.log(`Total Salary of this people are ${increaseSalary}`); // Total Salary of this people are 5500,7700,4400

//------------------------------------------------//

const cars = [
    { brand: "Toyota", year: 2018 },
    { brand: "Honda", year: 2020 },
    { brand: "Ford", year: 2015 },
];

const foundafter2017 = cars.filter((x) => x.year > 2017);
console.log(foundafter2017); //[ { brand: 'Toyota', year: 2018 }, { brand: 'Honda', year: 2020 } ]

//-----------------------------------------------//

const movies = [
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Room", rating: 3.6 },
    { id: 3, title: "Interstellar", rating: 8.6 },
];

const ratingBelow = movies.find((x) => x.rating < 5);
console.log(ratingBelow); // { id: 2, title: 'The Room', rating: 3.6 }

//-------------------------------------------------//

const players = [
    { name: "Messi", goals: 30 },
    { name: "Ronaldo", goals: 25 },
    { name: "Neymar", goals: 20 },
];

const nameWithGoals = players.map((x) => `${x.name} has goals ${x.goals}`);
console.log(nameWithGoals);
//[ 'Messi has goals 30', 'Ronaldo has goals 25', 'Neymar has goals 20' ]

//--------------------------------------------------//

const courses = [
    { id: 1, title: "Math", completed: true },
    { id: 2, title: "English", completed: false },
    { id: 3, title: "Science", completed: true },
];

const courseComplete = courses.filter((x) => x.completed === true);
console.log(courseComplete); //   [{ id: 1, title: 'Math', completed: true },
//   { id: 3, title: 'Science', completed: true }]

//======================================================//

const orders = [
    { id: 1, total: 250 },
    { id: 2, total: 400 },
    { id: 3, total: 150 },
];

const totalOrdersAmount = orders.map((x) => x.total);
console.log(totalOrdersAmount); // [ 250, 400, 150 ]

//=====================================================//

const orders2 = [
    { id: 1, total: 250 },
    { id: 2, total: 400 },
    { id: 3, total: 150 },
];

const totalOrdersAmount2 = orders2.reduce((x, y) => x + y.total, 0);
console.log(`Sum of order is ${totalOrdersAmount2}`);
// Sum of order is 800

//================== New Test =============================//

const array = [2, 3, 4, 5, 6, 7];
const double = array.map((x) => x * 2);
console.log(double); //[ 4, 6, 8, 10, 12, 14 ]

//_--------_________-----------__________-----------____________//

const num = [2, 3, 4, 5, 6, 7];
const evenNum = num.filter((x) => x % 2 == 0);
console.log(evenNum); // [ 2, 4, 6 ]

//=======================================================//

const n = [45, 67, 34, 69, 51];
const first = n.find((x) => x > 50);
console.log(first); // 67

//---------------------------------------------//

const fruits = ["apple", "banana", "date"];
const text = fruits.map((x) => `Hello ${x}`);
console.log(text); // [ 'Hello apple', 'Hello banana', 'Hello date' ]

//============================================//

const square = [3, 5, 6, 7];
const numSquare = square.map((x) => x ** 2);
console.log(numSquare); // [ 9, 25, 36, 49 ]

//==========================================//

const ages = [23, 10, 12, 16, 17, 18, 56, 45];
const ageFilter = ages.filter((x) => x >= 18);
console.log(ageFilter); // [ 23, 18, 56, 45 ]

//-------------------------------------------//

const no = [3, 5, 6, 21, 14, 28];
const divided = no.find((x) => x % 7 == 0);
console.log(divided); // 21

//------------------------------------------//

const persons = ["Farhana", "Shetu", "Sobita", "Sabrina", "Priya"];
const count = persons.forEach((x) => {
    console.log(`${x}- ${x.length}`);
});
// console.log(count)

// Farhana- 7
// Shetu- 5
// Sobita- 6
// Sabrina- 7
// Priya- 5

//---------------------------------------------//

const goods = [
    {
        products: "soap",
        price: 300,
    },
    {
        products: "rice",
        price: 700,
    },
];
const goodsPrice = goods.filter((x) => x.price > 300);
console.log(goodsPrice); // [ { products: 'rice', price: 700 } ]


//--------------------------------------------------//

const celsius = [0, 20, 30, 40, 100];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log(fahrenheit);  // [32, 68, 86, 104, 212]
