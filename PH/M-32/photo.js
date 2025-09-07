/*{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"

  } */



let loadPhoto = async () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(information => {
        displayPhoto(information.slice(0, 16));
        })
}

const displayPhoto = (photos) => {
    const container = document.getElementById("container");
            container.style.gap = "15px";
            container.style.padding = "10px";
            container.style.display = "grid";
            container.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
            container.innerHTML = "";
    photos.forEach((x) => {
        // console.log(x.title)
     const photoCard = document.createElement('div');

            photoCard.style.backgroundColor = "cadetblue";
            photoCard.style.padding = "10px";
            photoCard.style.border = "1px solid gray";

            photoCard.classList.add("card")
            photoCard.innerHTML = `
        <h4>${x.title}</h4>
        <img src="${x.thumbnailUrl}">
        `
        container.appendChild(photoCard)

    })
}