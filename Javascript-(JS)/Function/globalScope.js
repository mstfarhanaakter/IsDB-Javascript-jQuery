//A function can access all variables in the Global scope (public)
    let m = 5;
    let n = 6;
    function myFunction() {
      return m * n;
    }
    console.log(myFunction());
  
    // 
    
    function sub() {
      return m - n
    }
    document.write(sub());
