class SSC{
        constructor(name,reg,result){
            this.name = name;
            this.reg = reg;
            this.result = result;
        }
        results(){
            return this.name+ " " + this.reg+ " " + this.result
        }
    }
    //document.write("<br>")
    let newSsc = new SSC("Sabrina", 1707024, 3.24)
    console.log(newSsc.results())

    class HSC extends SSC{
        constructor(name,father,mother,reg,result){
            super(name,reg,result)
            this.father=father;
            this.mother = mother;
        }
        results1(){
            return this.name + " "+ this.father + " " + this.mother +" "+ this.reg +" " +this.result
        }
    }
    let b = new HSC ("Sabrina","Ali","Selina",1707024,3.24 )
    // console.log("<br>")
    console.log(b.results1())
    //console.log(b.results1())
    // document.write(b.results())

    class BBA extends HSC {
        constructor(name,father,mother,reg,result,college,subject){
            super(name,father,mother,reg,result)
            this.college=college;
            this.subject= subject;
        }
        result2(){
            return this.name + " "+ this.father + " " + this.mother +" "+ this.reg +" " +this.result +" " + this.college+" "+this.subject
        }
    }
    let c = new BBA ("Sabrina","Ali","Selina",1707024,3.24, "Begum Rokeya University, Rangpur", "Department of Marketing ");
    console.log(c.result2());