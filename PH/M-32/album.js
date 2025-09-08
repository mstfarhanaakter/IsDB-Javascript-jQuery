/* 
 {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  }
*/


let loadUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums"
    const res = await fetch(url)
    const data = await res.json();
    displayUser(data)
}

let displayUser = (albums) => {
    const sectionContainer = document.getElementById("container")
        sectionContainer.innerHTML = "";
    console.log(albums)

    albums.forEach((x) => {
        const userCard = document.createElement("div");
            userCard.classList.add("card")
            userCard.innerHTML = `
            <h4>Albums Information</h4>
            <p>Id: ${x.id}</p>
            <p>Title: ${x.title}</p>
            `;
        sectionContainer.appendChild(userCard)
    })
}