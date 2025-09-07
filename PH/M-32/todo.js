/*{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }*/

let loadToDo = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const data = await response.json();
    displayTodo(data)
}

let displayTodo = (todos) => {
    console.log(todos)
    const container = document.getElementById("container");
    container.innerHTML = "";
    todos.forEach((x) => {
        const todoCard = document.createElement("div")
        todoCard.classList.add("card")
        todoCard.innerHTML = `
                                <p>${x.completed === true ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-regular fa-square-check"></i>'
                                                                            }</p>
                                <h4>${x.title}</h4>`
        container.appendChild(todoCard);
    })
}