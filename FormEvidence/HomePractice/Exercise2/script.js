let bind = document.querySelector("#form");
    form.onsubmit = async(e){
        e.preventDefault();
    inputData = new FormData(bind);
    userValues = new FormValues(inputData);
    userValues.outPut();
    }

    class FormValues{
        constructor(data){
            for(let[name]of data){
                this[name]= data.getAll().join(',');
            }
        }
        outPut(){
            let results = `
            <body style ="background-color: lightyellow"> 
            <div style="padding"5px" >
                <h1>Respondent Information</h1>
            <p><b>Roll No.: </b>${this.roll}</p>
            <p><b>Student Name: </b>${this.fname}</p>
            <p><b>Father's Name: </b>${this.pname}</p>
            <p><b>Date of Birth: </b>${this.b}</p>
            <p><b>Mobile No: </b>${this.m}</p>
            <p><b>Email ID.: </b>${this.e}</p>
            <p><b>Password: Password: </b>${this.p}</p>
            <p><b>Gender: </b>${this.g}</p>
            <p><b></b></p>
            <p><b></b></p>
            <p><b></b></p>
            <p><b></b></p>
            <p><b></b></p>
            <p><b></b></p>
            </div>
            
            </body>
            
            
            `
        }
    }