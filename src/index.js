import './style.css';
import Task from './task';
import UI from './UI';
import Storage from './storage';

const nav = document.querySelector('.nav')

const list = document.querySelector('.list')
const addTask = document.querySelector('.list button')

// Create task on click of button

addTask.addEventListener('click', () => {

    UI.displayForm()
    UI.removeTaskButton();
    
    const form = document.querySelector('.list form')
    const title = document.querySelector('.list #title')
    const description = document.querySelector('.list #description')
    const priority = document.querySelector('.list #priority')
    const date = document.querySelector('.list #date')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Create Object
        const task = new Task(title.value, description.value, priority.value, date.value)
        // Store object in localStorage
        Storage.addTaskToStorage(task)
        // clear form
        UI.clearForm();
        // render tasks in Storage
        UI.renderTasks();
        UI.addTaskButton();
    })

    const formCancelBtn = document.querySelector('.list form .cancel')

    formCancelBtn.addEventListener('click', () => {
        UI.clearForm();
        UI.renderTasks();
        UI.addTaskButton();
    })
    
    

})



