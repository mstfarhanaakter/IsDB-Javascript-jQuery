function getData(dataId, getDataNext){
    setTimeout(()=>{
        console.log("Hello", dataId);
        if(getDataNext){
            getDataNext();
        }
    }, 2000)
}

getData(1, ()=>{
    console.log("get data 2....");
    getData(2, ()=>{
        console.log("get data 3....");
        getData(3, ()=>{
            console.log("get data 4....");
            getData(4);
        })
    })
})

// এই ধরণের নেস্টেড কলব্যাককে "callback hell" বলে। 
// কারণ এতে কোড অনেক জটিল এবং পড়তে কঠিন হয়ে যায়। 
// এই সমস্যা সমাধানে Promises বা async/await ব্যবহার করা হয়।