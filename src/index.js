import './style.css';
import Task from './task';
import UI from './UI';

const nav = document.querySelector('.nav')

const list = document.querySelector('.list')
const addTask = document.querySelector('.list button')

// Create task on click of button

const tasks = []

addTask.addEventListener('click', () => {
    const task = new Task("Make Breakfast", "Make scrambled eggs and bacon", "2/25/24", "1")
    // tasks.push(task)
    // console.log(tasks)

    tasks.push(JSON.stringify(task))
    console.log(task)
    console.log(tasks)

    // Add task to storage



    // rerender DOM

    UI.renderTasks(tasks);

    // const taskUI = UI.renderTasks(tasks)
    // list.appendChild(taskUI);

})



