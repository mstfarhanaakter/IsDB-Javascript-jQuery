// 4. Print all the multiplication tables with numbers from 1 to 10
    
for (i = 1; i<=10; i++){
    console.log(`\nMultipication Table for ${i}`)
    for (k = 1; k <= 10; k++){
        console.log(`${i} x ${k} = ${i * k}`)
    }
}