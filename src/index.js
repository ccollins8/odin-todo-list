import './style.css';
import { addDays, format, startOfDay } from "date-fns";
import Task from './task';
import Project from './project'
import UI from './UI';
import Storage from './storage';
import loadPage from './iniitial-page-load';
import {parse} from 'date-fns'

loadPage();

const addTask = document.querySelector('.list button')

const list = document.querySelector('.list');
const tasks = document.querySelector('.tasks')
const projects = document.querySelector('.projects')

const taskItems = document.querySelectorAll('task-item')

list.addEventListener('click', function (e) {

    // console.log(e.target.parentNode.classList.contains(".left"))


    
    // Check if node clicked is task item
    if ((e.target.parentNode.classList.contains("left") ||
        e.target.parentNode.classList.contains("right") ||
        e.target.classList.contains('task-item')) &&
        !e.target.classList.contains("delete")) {
        
        const clickedTask = e.target.closest('.task-item');
        
        document.querySelectorAll('.task-item').forEach(task => task.classList.remove('selected'))

        
        clickedTask.classList.add('selected')
        
        const selectedProjectTitle = document.querySelector('.project.selected .project-title').textContent
        const project = Storage.getProject(selectedProjectTitle)
        const selectedTaskTitle = document.querySelector('.task-item.selected .task-title').textContent
        
        // const task = Storage.getTask(project,selectedTaskTitle)
        const task = project.tasks.find(item => item.title = selectedTaskTitle)

        UI.displayEditTaskForm(task)
        UI.removeTaskButton()
        

        // const task = Storage.getTask(key)

        // UI.displayEditTaskForm(task)
        // UI.removeTaskButton()
    }

    const title = document.querySelector('.list #title')
    const description = document.querySelector('.list #description')
    const priority = document.querySelector('.list #priority')
    const dueDate = document.querySelector('.list #date')

    if (e.target.classList.contains('submit')) {

        // if (tasks.contains(e.target)) {
            
        //     const key = e.target.closest('form').nextSibling.firstElementChild.firstElementChild.textContent
            
        //     console.log(key)

        //     localStorage.removeItem(key)
            

        // }
            
        // const task = new Task(title.value, description.value, priority.value, dueDate.value)
        // // Store object in localStorage
        // Storage.addTaskToStorage(task)
        // // clear form
        // UI.clearTaskForm();
        // // render tasks in Storage
        // UI.renderTasks();
        // UI.addTaskButton();

        if (tasks.contains(e.target)) {
            Storage.editTask()
        } else {
            const task = new Task(title.value, description.value, priority.value, dueDate.value)

            const selectedProjectTitle = document.querySelector('.project.selected .project-title').textContent
            
            const project = Storage.getProjectList().find(project => project.title == selectedProjectTitle)
            Storage.addTask(project,task);
        }

        
        UI.clearTaskForm();
        UI.renderTasks();
        
        UI.addTaskButton();
    }

    if (e.target.classList.contains('cancel')) {
        UI.clearTaskForm();
        UI.renderTasks();
        UI.addTaskButton();
    }

    if (e.target.classList.contains('add-task-button')) {
        UI.displayTaskForm();
        UI.removeTaskButton();

    }
    
    if (e.target.classList.contains('delete')) {
        
        e.target.closest('.task-item').classList.add('selected')
        // const key = document.querySelector('.list .selected .task-title').textContent
        // console.log(key)
        // localStorage.removeItem(key)
        // UI.renderTasks()
        const projectTitle = document.querySelector('.project.selected .project-title').textContent
        const taskTitle = document.querySelector('.task-item.selected .task-title').textContent;
        
        // const project = Storage.getProjectList().find(item => item.title == selectedProjectTitle)
        
        Storage.deleteTask(projectTitle,taskTitle)
        UI.renderTasks()
    }
})

// NAVIGATION BAR SECTION

const nav = document.querySelector('main .nav');


nav.addEventListener('click', (e) => {

    if (e.target.matches('.all-tasks-button')) {
        UI.renderAllTasks()
        UI.deselectAll()
        e.target.classList.add('selected')
        UI.removeTaskButton()
        
    }

    if (e.target.matches('.today-tasks-button')) {
        UI.renderTodayTasks()
        UI.deselectAll()
        e.target.classList.add('selected')
        UI.removeTaskButton()
    }

    if (e.target.matches('.upcoming-tasks-button')) {
        UI.renderUpcomingTasks()
        UI.deselectAll()
        e.target.classList.add('selected')
        UI.removeTaskButton()
    }
    
    if (e.target.classList.contains('add-project-button')) {
        UI.displayProjectForm();
        UI.removeAddProjectButton();
        
    }

    const title = document.querySelector('.nav #title')

    if (e.target.classList.contains('submit')) {

        if (projects.contains(e.target)) {
            Storage.renameProject()
        } else {
            const project = new Project(title.value)
            Storage.addProject(project)
        }
        
        UI.clearProjectForm()
        UI.addProjectBtn()
        UI.renderProjects()
    }

    if (e.target.classList.contains('cancel')) {
        UI.clearProjectForm()
        UI.addProjectBtn()
    }

    if (e.target.closest('.project')) {
        const clickedProject = e.target.closest('.project');
        
        // remove "selected from last project
        UI.deselectAll()
        clickedProject.classList.add('selected');
        
        // const title = e.target.closest('.project').firstElementChild.nextElementSibling.textContent;
        const title = clickedProject.querySelector('.project-title').textContent
        
        // console.log(Storage.getProjectList().find(project => project.title == title))

        UI.renderTasks()
        if (document.querySelector('.list .add-task-button').style.display == 'none') {
            UI.addTaskButton()
        }
      }
    
    if (e.target.classList.contains('vert')) {
        UI.displayProjectPopup()
    }

    if (e.target.classList.contains('delete')) {
        Storage.deleteProject()
        UI.renderProjects()
        UI.removeProjectPopup()
        // Probably add something to prevent deleting all projects
    }

    if (e.target.classList.contains('rename')) {
        UI.displayEditProjectForm()
        UI.removeProjectPopup()
    }




        

})


