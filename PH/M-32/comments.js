const loadComments = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const res = await fetch(url);
    const data = await res.json();
    // displayComments(data.slice(0,10)); 
    displayComments(data);

}

/* {
    "postId": 1,
     "id": 1,
     "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }  */ 

const displayComments = (comments) => {
    console.log(comments);
    const sectionContainer = document.querySelector(".section-container");
    sectionContainer.innerHTML = "";

    comments.forEach((x) => {
        const commentsCard = document.createElement("div")
        commentsCard.classList.add("card")
        commentsCard.innerHTML = `<div>
            <h4>Name: ${x.name}</h4>
            <p>Email: ${x.email}</p>
            <p><b>Bio:</b> ${x.body}</p>
            </div>`;
        sectionContainer.appendChild(commentsCard);
    })
}



