

    var n = [4,5,8,68,79,1];
    var large = n[0];
    var small = n[0];
    var sum = 0;
    for (i = 0; i<n.length; i++){
        if (small >n[i]){
            small = n[i];
        }
        else if (large<n[i]){
            large =n[i];
        }
            sum +=n[i];

        
    }
    console.log("Small Number: " + small );
    console.log("Large Number: " + large );
    console.log("Total Number: " + sum )


    
