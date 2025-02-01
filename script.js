function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskInput.value}</span>
        <button onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}
