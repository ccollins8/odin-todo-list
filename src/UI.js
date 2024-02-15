export default class UI {

    static tasksNode = document.querySelector('main .tasks');
    
    static renderTasks(tasks) {
        UI.tasksNode.innerHTML = "";
        tasks.forEach((task) => {
            UI.tasksNode.appendChild(UI.addTask(task))
        });;
        
    }

    static addTask(task) {
        const taskUI = document.createElement('div');
        taskUI.classList.add('task-item');
        
        task = JSON.parse(task)
    
        const title = document.createElement('p');
        title.classList.add('task-title');
        title.textContent = task.title;
        taskUI.appendChild(title);
    
        const dueDate = document.createElement('p');
        dueDate.classList.add('task-due-date');
        dueDate.textContent = task.dueDate;
        taskUI.appendChild(dueDate);
    
        return taskUI;
    }
}