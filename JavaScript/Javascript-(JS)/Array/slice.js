// slice  (start, end)Count 
        // start 1 after comma (,)
        
        const fruit2 = ["banana ", "apple ", "orange ", "Mango ", "date", "water"]

        console.log(fruit2.slice(2)); // orange, mango, date, water
        console.log(fruit2.slice(3)); // Mango ....
        console.log(fruit2.slice(1, 3)); // [ 'apple ', 'orange ' ]
        console.log(fruit2) //all


    let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
       let n1 = n.slice(5,10);
       console.log(n1)

       //output [ 6, 7, 8, 9, 10 ]