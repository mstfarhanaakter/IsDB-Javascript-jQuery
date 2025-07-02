
        var data =[4,5,-4,-1,0,-8,0,45,9];
        var positive = 0;
        var negative = 0;
        var zero = 0;
        let i = 0;
        for (i =0; i<data.length; i++){  // i = 0: প্রথম index থেকে শুরু
            if (data[i]>0){ //data[i] অর্থাৎ বর্তমান সংখ্যা 0 এর চেয়ে বড় হয়, তাহলে সেটা positive।
                positive++;
            }
            else if(data[i]<0){
                negative++;
            }
            else{
                zero++;
            }
        }
        console.log("Positve Number:  " + positive );
        console.log("Negagtive Number:  " + negative);
        console.log("Zero: ", + zero )
        

    