let promise = new Promise((resolve, reject)=>{
    console.log('I am new in this.');
    resolve("success");
    reject("some error has occured");
})


// using calling Hell
function getData(dataId, getDataNext){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Hello", dataId);
        if(getDataNext){
            getDataNext();
        }
    }, 2000)
    })
    
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
