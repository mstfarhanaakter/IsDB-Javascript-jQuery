// filter  creates a new array that includes only
//  the elements that pass a test (return true) from a callback function.

// filter use 
        const ages = [23, 14, 15, 16, 27, 28, 29];
        console.log(ages.filter(checkAdult));
        // document.write(ages1.filter(checkAdult));
        function checkAdult(age){
            return age >=18;
        }

        
