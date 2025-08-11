
    // Descending order means arranging items from highest to lowest, 
    // whether it's numbers, letters, dates, or anything else

    var a = (parseInt(prompt("Enter 1st number: ")))
    var b = (parseInt(prompt("Enter 2nd number: ")))
    var c = (parseInt(prompt("Enter 3rd number: ")))

    if (a<b){
        temp=a;
        a=b;
        b=temp;
    }
        if (a<c){
        temp=c;
        c=a;
        a=temp;
    }
        if (b<c){
        temp=b;
        b=c;
        c=temp;
    }
    console.log(a +"," + b + "," + c);