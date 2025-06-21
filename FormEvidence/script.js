// let submitbtn = document.getElementById("btn");
// btn.addEventListener("submit", ()=>{
    
// })

class FormValues{
    constructor(formData){
        for(let [name, value] of formData){
            this[name] = formData.getAll(name).join(",") //getAll() দিয়ে সব মান (যেমন একাধিক চেকবক্স) নেওয়া হয়।
            //.join(', ') মানে সব মানকে এক লাইনে কমা দিয়ে সাজানো হয়।
        };   
    };

    getData(){
    var result = "Name: " + this.f +"<br>";
        result += "Contact: " + this.con +"<br>";
        result += "Remarks: " + this.re + "<br>";
        result += "Gender: " +this.g + "<br>";
        result += "Course: " + this.course + "<br>";
        result += "Location: " + this.location + "<br>"
    var win = window.open('', '', 'width=400, height=400');
        win.document.write(result);
}

};





form1.onsubmit = async(e) =>{ 
    // async ফাংশন মানে এমন ফাংশন, যা প্রতীক্ষা (wait) করতে পারে — 
    // মানে, কাজ শেষ না হওয়া পর্যন্ত অপেক্ষা করতে পারে। এতে page
    //  না আটকে ব্যাকগ্রাউন্ডে কাজ চালানো যায়।
    e.preventDefault(); //e.preventDefault() দিয়ে পেজ রিলোড হওয়া বন্ধ করা হয়।
    var fm = document.querySelector("#form1"); 
    var  form_data = new FormData(fm); //তারপর ফর্মের সব ইনপুট FormData দিয়ে নেওয়া হয়।
    var f = new FormValues(form_data);// FormValues অবজেক্ট বানিয়ে getData() কল করা হয়।
    f.getData();
    console.log(win)
    
}