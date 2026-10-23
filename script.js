const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";

        checkbox.addEventListener("change", function() {
            taskTextSpan.classList.toggle("completed", checkbox.checked);
        });

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});