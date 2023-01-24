let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let task = taskInput.value;
    if (!task) {
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
    taskInput.value = "";
});
