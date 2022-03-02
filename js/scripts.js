// função que adiciona tarefa

function addTask() { 

    // título da tarefa

    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
      
        const template = document.querySelector(".template");


        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

       const list = document.querySelector("#task-list");

       list.appendChild(newTask);

       // adicionar o evento de remover para

       const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
           
            removeTask(this);

       });


        // adicionar o evento de aceitar

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
           
            completeTask(this);

       });


       // Limpar

       document.querySelector("#task-title").value = "";

    }
    
    
}

// função de remover elemento da lista

function removeTask(task) {

    task.parentNode.remove(true);

}


// função de remover elemento da lista

function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}


const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});