/* {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }*/





let loadUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(url)
    const data = await res.json();
    displayUser(data)
}

let displayUser = (users) => {
    const sectionContainer = document.getElementById("container")
        sectionContainer.innerHTML = "";
    console.log(users)

    users.forEach((x) => {
        const userCard = document.createElement("div");
            userCard.classList.add("card")
            userCard.innerHTML = `
            <h4>Users Information</h4>
            <p>Name: ${x.name}</p>
            <p>Username: ${x.username}</p>
            <p>Email: ${x.email}</p>
            <p>City: ${x.address.city}</p>
            `;
        sectionContainer.appendChild(userCard)
    })
}