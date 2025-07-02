// <!-- 0 1 1 2 3 5 8 13 21 25 -->
// <!-- 0-10 series -->

var n = 10, n1 = 0, n2 = 1, next = 0;
for (let i = 1; i <= n; i++) {
    console.log(n1);
    document.write(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}

//Another example

let n = 10;
let first = 0;
let second = 1;

for(let i = 1; i <=n; i++){
    console.log(first);
    let next = first + second;
        first = second;
        second = next;
}
