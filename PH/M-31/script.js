//---------------------- (== Vs ===)-------------------//

console.log(0 == "0")  // True  type coersion or covversion
console.log(0 === "0") // False
console.log([] == []) // False
console.log(true == 1) // True
console.log(false === 0) // False
console.log(null === null) //True

//--------------null/undefined------------------------------//

let value;
console.log(value) // undefined

let x = null
console.log(x) // null
console.log(x == value) //true

//-------------Closure---------------------//

let count = 0;
function increase(callback) {
    count = count + 1
    console.log(count)
    if (callback) {
        callback()
    }
}
const deposite = () => {
    const amount = 500;
    const balance = 0;
    console.log(`cutomer balance ${balance} and amount deposit is ${amount}`)

}


increase()
increase()
increase()
increase(deposite)
increase(deposite)
increase()
increase()
increase(deposite)