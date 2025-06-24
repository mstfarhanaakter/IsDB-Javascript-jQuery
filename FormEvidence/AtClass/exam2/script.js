var bind = document.querySelector("#form");
    bind.onsubmit = async(e)=>{
        e.preventDefault()
        var inputForm = new FormData(bind);
        var form_data = new FormUserValues(inputForm);
            form_data.userData();
    }

    class FormUserValues{
        constructor(data){
            for (let [name, value] of data){
                this[name]= data.getAll(name).join(', ')
            }
        }
        userData(){
            var result = "First Name: " + this.fn + "<br>";
                result +="Last Name: " + this.ln + "<br>";
                result +="Email: "+ this.e + "<br>";
                result +="Contact No.: "+ this.c + "<br>";
                result +="Gender: " + this.g + " <br>";
                result +="Courses: " + this.courses + "<br>";
                result +="Location: " + this.l + "<br>";
                result +="Remarks: " + this.r + "<br>";
            var show = window.open('', '', "width=400, height=400");
                show.document.write("Respondent Information-" + "<br>" + "<br>" + result);

                
        }
    }