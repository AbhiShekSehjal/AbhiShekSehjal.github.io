const todo = [];

      const taskInput = document.getElementById("taskInput");
      const output = document.getElementById("output");
      const taskList = document.getElementById("taskList");

      // Add Task
      document.getElementById("Add").addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
          todo.push(task);
          taskInput.value = "";
          updateTaskList();
          showMessage("Task added!", "green");
        } else {
          showMessage("Please enter a valid task.", "red");
        }
      });

      // List Tasks
      document.getElementById("List").addEventListener("click", () => {
        if (todo.length === 0) {
          showMessage("No tasks to show.", "red");
        } else {
          updateTaskList();
          showMessage("Tasks listed below.", "blue");
        }
      });

      // Delete Task
      document.getElementById("Delete").addEventListener("click", () => {
        if (todo.length === 0) {
          showMessage("No tasks to delete.", "red");
        } else {
          const idx = parseInt(
            prompt(
              `Enter the index of the task to delete (0-${todo.length - 1}):`
            ),
            10
          );
          if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            updateTaskList();
            showMessage("Task deleted!", "green");
          } else {
            showMessage("Invalid index.", "red");
          }
        }
      });

      // Quit
      document.getElementById("Quit").addEventListener("click", () => {
        taskInput.value = "";
        todo.length = 0; // Clear tasks
        updateTaskList();
        showMessage("All tasks cleared. Visit again!", "purple");
      });

      // Update Task List in the UI
      function updateTaskList() {
        taskList.innerHTML = ""; // Clear previous list
        todo.forEach((task, index) => {
          const li = document.createElement("li");
          li.textContent = `${index}: ${task}`;
          li.className = "list-group-item";
          taskList.appendChild(li);
        });
      }

      // Show Output Message
      function showMessage(message, color) {
        output.textContent = message;
        output.style.color = color;
      }