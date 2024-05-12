document.addEventListener("DOMContentLoaded", function() {
    // Load tasks from localStorage when the DOM is ready
    loadTasks();
});

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task !== "") {
        var list = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = task;
        li.addEventListener("click", toggleCompleted);
        list.appendChild(li);
        input.value = "";

        // Save tasks to localStorage
        saveTasks();
    }
}

function toggleCompleted() {
    this.classList.toggle("completed");
    // Save tasks to localStorage when a task is marked as completed or incomplete
    saveTasks();
}

function saveTasks() {
    var tasks = document.querySelectorAll("#taskList li");
    var taskList = [];
    tasks.forEach(function(task) {
        taskList.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadTasks() {
    var storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);
        var list = document.getElementById("taskList");
        tasks.forEach(function(taskText) {
            var li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", toggleCompleted);
            list.appendChild(li);
        });
    }
}
