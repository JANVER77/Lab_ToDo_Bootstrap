const toDos = [];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("toDo-form");
    const todoList = document.getElementById("toDo-list");

    form.addEventListener ("submit",  (e) => {
        e.preventDefault();
        console.log("✅ Formulario enviado");

        const todo = document.getElementById("toDo");
        const toDoText = todo.value;

        toDos.push(toDoText);

        const toDosTemplate = toDos.map(t => `<liclass="list-group-item"> ${t} </liclass=>`);
        todoList.innerHTML = toDosTemplate.join('');
        todo.value = "";
    });
});