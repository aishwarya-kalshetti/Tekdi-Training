const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", () => {
      const taskText = input.value.trim();
      if (taskText === "") return;

     
      const li = document.createElement("li");
      li.textContent = taskText;

   
      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑️";
      delBtn.style.marginLeft = "10px";

      delBtn.onclick = () => li.remove();

      li.appendChild(delBtn);
      taskList.appendChild(li);

      input.value = ""; 
    });