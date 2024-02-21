export default class UI {

    static tasksNode = document.querySelector('main .tasks');
    // static addTaskButton = document.querySelector('main .list button' )
    
    static renderTasks(tasks) {
        UI.tasksNode.innerHTML = "";

        Object.keys(localStorage).forEach((key) => {
            UI.tasksNode.appendChild(UI.addTask((localStorage.getItem(key))));
         });
        
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

    static displayForm() {
        const taskForm = document.createElement('form')
        const tasks = document.querySelector('.list .tasks');
        taskForm.innerHTML = `
        <p>
            <label>Title</label>
            <input type="text" id="title">
        </p>
        <p>
            <label>Description</label>
            <input type="text" id="description">
        </p>
        <p>
            <label>Priority</label>
            <input type="text" id="priority">
        </p>
        <p>
            <label>Date</label>
            <input type="text" id="date">
        </p>
        <section>
            <p>
                <button type="submit">Confirm</button>
            </p>
            <p>
                <button type="button" class="cancel">Cancel</button>
            </p>
        </section>

        `
        tasks.appendChild(taskForm)
    }

    static addTaskButton() {
        document.querySelector('.list > button').style.display = 'block';
        
    }

    static removeTaskButton() {
        document.querySelector('.list > button').setAttribute('style', 'display: none')
        
    }

    static clearForm() {
        const form = document.querySelector('.list form')
        form.remove();
    }
}