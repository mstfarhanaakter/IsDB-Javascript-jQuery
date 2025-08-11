class FormValues {
    constructor(data) {  // DATA IS WORKING AS OBJECT HERE; 

        // Constructor is a special method which 
        /*অবজেক্ট তৈরির সময় তার প্রপার্টিগুলো সেট করা।
            অবজেক্টের প্রাথমিক মান (initial value) নির্ধারণ করা।*/
        // DATA IS WORKING AS OBJECT HERE; 
        
        for (let [name, value] of data) {
            this[name] = data.getAll(name).join(',');
        }
    }
    UserData() {

        var
            results = "First Name: " + this.fn + "<br>";
        results += "Last Name: " + this.ln + "<br>";
        results += "Email:  " + this.email + "<br>";
        results += "Contact No. " + this.con + "<br>";
        results += "Gender: " + this.g + "<br>";
        results += "Courses: " + this.courses + "<br>";
        results += "Location: " + this.location + "<br>";
        results += "Remarks: " + this.remarks + "<br>";
        var show = window.open('', '', "width=400, height=400");
        show.document.write("Respondent Information" + "<br>" + results);


    }
}


var formValues = document.querySelector("#form")

form.onsubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(formValues);
    var obj = new FormValues(formData);
    obj.UserData();
}