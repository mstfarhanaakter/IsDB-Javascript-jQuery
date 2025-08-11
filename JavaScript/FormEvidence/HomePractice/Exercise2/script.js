let bind = document.querySelector("#form");
    bind.onsubmit = async(e) =>{
        e.preventDefault();
    var inputData = new FormData(bind);
    var  userValues = new FormValues(inputData);
    userValues.outPut();
    }

    class FormValues{
        constructor(data){
            for(let[name] of data){
                this[name]= data.getAll(name).join(' ');
            }
        }
        outPut(){
            let results = `
            <body style ="background-color: #FDA7DF"> 
            <div style="padding:5px" >
                <h1 style="text-align:center">Respondent Information</h1>
            <p><b>Roll No.: </b>${this.roll}</p>
            <p><b>Student Name:  </b>${this.sname}</p>
            <p><b>Father's Name: </b>${this.pname}</p>
            <p><b>Date of Birth: </b>${this.d}</p>
            <p><b>Mobile No: </b>${this.m}</p>
            <p><b>Email ID.: </b>${this.e}</p>
            <p><b>Password: </b>${this.p}</p>
            <p><b>Gender: </b>${this.g}</p>
            <p><b>Department: </b> ${this.dep}</p>
            <p><b>Courses: </b>${this.course}</p>
            <p><b>Student Photo: </b>${this.sp}</p>
            <p><b>City: </b>${this.city}</p>
            <p><b>Address: </b>${this.add}</p>
            <p><b>Suggestions </b>${this.sug}</p>
            <button onclick="window.print()" style = "width:25%; border:none; padding:5px; font-weight:bold">Print</button>
            <button onclick="window.close()" style = "width:25%; border:none; padding:5px; font-weight:bold">Close</button>
            </div>
            </body>
            `;
            const openWindow = window.open('', '', "width= 400, height=400")
                openWindow.document.write(results);

        }
    }

    