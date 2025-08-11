function calculator (a, b, mulCallback){
    mulCallback(a , b);
    
}
function mul(a,b){
    console.log(a*b)
}

calculator(5, 6, mul);
