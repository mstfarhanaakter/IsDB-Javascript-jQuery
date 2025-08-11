//  Arrow function
//single line  or single arguments

    const addition = (a, b) => a + b; 
    console.log(addition(3, 8));
   // document.write(" ", addition(3, 2));


   // multiple arguments 
    const addition1 = (a, b) => { // Multiple line of code use curly braces{}
      if (a > b)
        return "a is greater";
      else
        return "b is greter";

    };
    console.log(addition1(3, 9));