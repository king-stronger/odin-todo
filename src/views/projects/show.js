function createTask(task){
    return `
        <li class="todolist-item">
            <button class="priority">
                <i class='bx bx-circle'></i>
            </button>
            
            <div>
                <h3 class="text">${task.title}</h3>
                <p class="paragraph text-sm">${task.description}</p>
                <div class="small-text text-sm">
                    <i class='bx bx-calendar' ></i>
                    <span>${task.date}</span>
                </div>
            </div>

            <div class="todolist-options">
                <button data-id=${task.id}>
                    <i class='bx bx-edit-alt' ></i>
                </button>
                <button data-id=${task.id}>
                    <i class='bx bx-trash-alt' ></i>
                </button>
            </div>
        </li>
    `;
}

function generateTodoList(tasks){
    return tasks.map(createTask).join("");
}

function populateTodolist(selectedContainer, tasks){
    let container = document.createElement('section');
    container.classList.add('projects-section flow-lg')

    let todolist = generateTodoList(tasks);

    container.innerHTML = `
        <h2 class="title">First</h2>

        <ul class="todolist flow">
            ${todolist}
        </ul>

        <button class="">
            <i class='bx bx-plus option'></i>
            <span class="small-text">Add a todo</span>
        </button>
    `;

    return container;
}

export { populateTodolist }