// const body = document.body;
// body.append("Hello Worlds!")

var newDiv = document.createElement("button"); // Create a new <div> element
newDiv.innerText = "Click Me!"; // Set the text content of the <div>

console.log(newDiv)
newDiv.style.backgroundColor = "yellow"
newDiv.style.backgroundImage = "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
let div = document.querySelector("div")
div.append(newDiv)

 // Append the new <div> to the body of the document
let doc = document.querySelectorAll("hey")
hey.style.color ="white"
hey.style.backgroundColor ="blue"

let dox = document.createElement("button")
dox.textContent = "submit!"
let h4 = document.querySelector("h4")
h4.after(dox)

hey.append(" hey bro")
hey.prepend("How are you ")
// hey.before("bu")

let p = document.createElement("div")
p.innerText = "\nNew Div"
// p.style.backgroundColor ="green"
p.style.backgroundImage = "url(https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
p.style.height = "500px"
p.style.width = "500px"
p.style.backgroundRepeat = "no-repeat"
p.style.backgroundCover = "cover"
p.style.textAlign = "center"
document.write("<br>")
newDiv.after(p)



