
let url = "https://jsonplaceholder.typicode.com/posts"

function a() {
    fetch(url)
        .then(response => response.json())
        .then(data => {displayPost(data)})
        // .catch(error => console.error('Error:', error));
}


const displayPost = (posts) =>{
   const container = document.getElementById("div-container");
        container.innerHTML = "";
   posts.forEach((x)=>{
    console.log(x);
    const card = document.createElement("div");
        card.innerHTML = `
        <div class="card">
        <h4>${x.title}</h4>
        <p>${x.body}</p>
        </div>
        `;
        container.appendChild(card);
   })

}



