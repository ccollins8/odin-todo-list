import './style.css';
import Task from './task';
import UI from './UI';
import Storage from './storage';
import loadPage from './iniitial-page-load';

loadPage();

const nav = document.querySelector('.nav')

const addTask = document.querySelector('.list button')

// Create task on click of button

// addTask.addEventListener('click', () => {

//     UI.displayTaskForm()
//     UI.removeTaskButton();
    
//     const form = document.querySelector('.list form')
//     const title = document.querySelector('.list #title')
//     const description = document.querySelector('.list #description')
//     const priority = document.querySelector('.list #priority')
//     const date = document.querySelector('.list #date')

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         // Create Object
//         const task = new Task(title.value, description.value, priority.value, date.value)
//         // Store object in localStorage
//         Storage.addTaskToStorage(task)
//         // clear form
//         UI.clearForm();
//         // render tasks in Storage
//         UI.renderTasks();
//         UI.addTaskButton();
//     })

//     const formCancelBtn = document.querySelector('.list form .cancel')

//     formCancelBtn.addEventListener('click', () => {
//         UI.clearForm();
//         UI.renderTasks();
//         UI.addTaskButton();
//     })
    
    

// })

// click on tasks and edit/delete it

// const tasks = document.querySelectorAll('.list .task-title')
// tasks.forEach((task) => {
//     task.addEventListener('click', () => {
        
//         // get key
//         const key = task.textContent
//         UI.displayEditTaskForm(localStorage.getItem(key));
//         UI.removeTaskButton();


//         const form = document.querySelector('.list form')
//         const title = document.querySelector('.list #title')
//         const description = document.querySelector('.list #description')
//         const priority = document.querySelector('.list #priority')
//         const date = document.querySelector('.list #date')
        
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
            
//             const task = new Task(title.value, description.value, priority.value, date.value)
//             Storage.addTaskToStorage(task)
//             UI.clearForm();
//             UI.renderTasks();
//             UI.addTaskButton();
//         })

//         const formCancelBtn = document.querySelector('.list form .cancel')

//         formCancelBtn.addEventListener('click', () => {
//             UI.clearForm();
//             UI.renderTasks();
//             UI.addTaskButton();
//         })


//     })
// })

const list = document.querySelector('.list');
const tasks = document.querySelector('.tasks')

list.addEventListener('click', function (e) {

    // Check if node clicked is task item
    if (e.target.parentNode.classList.contains('task-item')) {
        // key = text content of task-title

        // change class to selected
        e.target.parentNode.classList.add('selected')

        const key = e.target.parentNode.firstChild.textContent
        const task = Storage.getTask(key)

        UI.displayEditTaskForm(task)
        UI.removeTaskButton()
    }

    const title = document.querySelector('.list #title')
    const description = document.querySelector('.list #description')
    const priority = document.querySelector('.list #priority')
    const dueDate = document.querySelector('.list #date')

    if (e.target.classList.contains('submit')) {

        if (tasks.contains(e.target)) {
            
            const key = e.target.closest('form').nextSibling.firstChild.textContent
            
            localStorage.removeItem(key)
            

        }
            
        const task = new Task(title.value, description.value, priority.value, dueDate.value)
        // Store object in localStorage
        Storage.addTaskToStorage(task)
        // clear form
        UI.clearForm();
        // render tasks in Storage
        UI.renderTasks();
        UI.addTaskButton();
    }

    if (e.target.classList.contains('cancel')) {
        UI.clearForm();
        UI.renderTasks();
        UI.addTaskButton();
    }

    if (e.target.classList.contains('add-task-button')) {
        UI.displayTaskForm();
        UI.removeTaskButton();

    }
    
})


