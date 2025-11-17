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

        const toDosTemplate = toDos.map((t, i) => `
        <li class="list-group-item d-flex justify-content-between text-start d-block border my-1 mx-5">
            ${t}
            <i class="bi bi-x-circle text-end text-danger fs-5" style="cursor: pointer;" onclick="delTarea(${i})">
            </i>
        </li>
        `);
        todoList.innerHTML = toDosTemplate.join('');
        todo.value = "";
    });
});

function delTarea(index) {
    toDos.splice(index, 1);

    const todoList = document.getElementById("toDo-list");
    const toDosTemplate = toDos.map((t, i) => `
        <li class="list-group-item d-flex justify-content-between text-start d-block border my-1 mx-5">
            ${t}
            <i class="bi bi-x-circle text-end text-danger fs-5" style="cursor: pointer;" onclick="delTarea(${i})">
            </i>
        </li>
    `);
    todoList.innerHTML = toDosTemplate.join('');
}