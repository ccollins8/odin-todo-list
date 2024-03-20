import Storage from './storage'
import {differenceInDays, format, isToday, parse } from "date-fns";

export default class UI {

    static tasksNode = document.querySelector('main .tasks');

    // static addTaskButton = document.querySelector('main .list button' )
    
    static renderProjects() {
        
        
        const projects = document.querySelector('.nav .projects')
        projects.innerHTML = '';
        const projectList = Storage.getProjectList()
        projectList.forEach((project) => {
            const projectNode = document.createElement('button');
            projectNode.classList.add('project')
            
            projectNode.innerHTML = `
            <span class="material-icons">menu</span>
            <div class="project-title">${project.title}</div>
            <span class="material-icons vert">more_vert</span>
            `
            projects.appendChild(projectNode)
            
        })
    }
    
    static renderTasks() {
        // UI.tasksNode.innerHTML = "";

        // Object.keys(localStorage).forEach((key) => {
        //     UI.tasksNode.appendChild(UI.addTask((localStorage.getItem(key))));
        //  });

        UI.tasksNode.innerHTML = ''
        const selectedProjectTitle = document.querySelector('.project.selected .project-title').textContent
            
        const project = Storage.getProjectList().find(project => project.title == selectedProjectTitle)
        
        const projectTasks = project.tasks
        
        // const projectIndex = projectList.findIndex(project => project.title = projectTitle)
        
        // const projectTasks = projectList[projectIndex].tasks;
        

        projectTasks.forEach(task => {
            const tasksNode = document.querySelector('.list .tasks')
            tasksNode.appendChild(UI.addTask(task))
        })
    }

    static renderAllTasks() {
        // for each all projects and then for each tasks for each project
        UI.tasksNode.innerHTML = ''

        const projectList = Storage.getProjectList()

        projectList.forEach(project => {
            project.tasks.forEach(task => {
                const tasksNode = document.querySelector('.list .tasks')
                tasksNode.appendChild(UI.addTask(task))
            })
        })
    }

    static renderTodayTasks() {
        // for each all projects and then for each all tasks filtering for date
        UI.tasksNode.innerHTML = ''

        const projectList = Storage.getProjectList()

        projectList.forEach(project => {
            project.tasks.forEach(task => {
                const formatedDateStr = task.dueDate.replace(/-/g,'/')
                const date = new Date(formatedDateStr)
                if (isToday(date)) {
                    this.tasksNode.appendChild(UI.addTask(task))
                }
            })
        })
    }

    static renderUpcomingTasks() {
        // for each all projects and then for each task filter by date
        UI.tasksNode.innerHTML = ''

        const projectList = Storage.getProjectList()

        projectList.forEach(project => {
            project.tasks.forEach(task => {
                const formatedDateStr = task.dueDate.replace(/-/g, '/')
                const date = new Date(formatedDateStr)

                const diffInDays = differenceInDays(date, new Date())

                if (diffInDays <= 7 && diffInDays >= 0) {
                    this.tasksNode.appendChild(UI.addTask(task))
                }


            })
        })
    }

    static render() {
        UI.renderProjects()
        UI.renderTasks()
    }

    static addTask(task) {
      const taskUI = document.createElement('div');

        taskUI.classList.add('task-item');
        
        
    
        // const title = document.createElement('p');
        // title.classList.add('task-title');
        // title.textContent = task.title;
        // taskUI.appendChild(title);
    
        // const dueDate = document.createElement('p');
        // dueDate.classList.add('task-due-date');
        // dueDate.textContent = `Due Date: ${task.dueDate}`;
        // taskUI.appendChild(dueDate);
        
        taskUI.innerHTML = `
        <div class="left">
            <p class="task-title">${task.title}</p>
            <p class="task-description">${task.description}</p>
        </div>
        <div class="right">
            <p class="task-due-date">Due Date: ${task.dueDate}</p>
            <p class="task-priority">Priority: ${task.priority}</p>
            <button class="delete">X</button>
        </div>
        
  `;


        return taskUI;

        
    }

    static taskFormHTML = `
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
            <input type="date" id="date">
        </p>
        <section>
            <p>
                <button type="button" class="submit">Confirm</button>
            </p>
            <p>
                <button type="button" class="cancel">Cancel</button>
            </p>
        </section>
        `

    static displayTaskForm() {
        const list = document.querySelector('.list')
        const taskForm = document.createElement('form')
        const addTask = document.querySelector('.add-task-button');
        taskForm.innerHTML = this.taskFormHTML;
        list.insertBefore(taskForm, addTask)
    }

    static displayEditTaskForm(task) {
        

        const taskForm = document.createElement('form')
        const tasks = document.querySelector('.list .tasks');
        taskForm.innerHTML = this.taskFormHTML;
        

        const selectedTaskItem = document.querySelector('.task-item.selected')

        selectedTaskItem.style.display = 'none'

        tasks.insertBefore(taskForm, selectedTaskItem)

        const title = document.querySelector('.list form #title')
        title.value = task.title
        const description = document.querySelector('.list form #description')
        description.value = task.description
        const priority = document.querySelector('.list form #priority')
        priority.value = task.priority
        const date = document.querySelector('.list form #date')
        date.value = task.dueDate

        


    }

    static addTaskButton() {
        document.querySelector('.list > button').style.display = 'block';
        
    }

    static removeTaskButton() {
        document.querySelector('.list > button').setAttribute('style', 'display: none')
        
    }

    static clearTaskForm() {
        const form = document.querySelector('.list form')
        form.remove();
    }

    static displayProjectForm() {
        const projectSection = document.querySelector('.project-section')
        const addProjectBtn = document.querySelector('.add-project-button')
        const form = document.createElement('form')
        form.innerHTML = `
        <p>
            <label>Title</label>
            <input type="text" id="title">
        </p>
        <section>
            <p>
                <button type="button" class="submit">Submit</button>
            </p>
            <p>
                <button type="button" class="cancel">cancel</button>
            </p>
        </section>
        `
        projectSection.insertBefore(form,addProjectBtn)
    }

    static displayEditProjectForm() {
        const projectSection = document.querySelector('.projects')
        const selectedProject = document.querySelector('.project.selected')
        const form = document.createElement('form')
        form.innerHTML = `
        <p>
            <label>Title</label>
            <input type="text" id="title">
        </p>
        <section>
            <p>
                <button type="button" class="submit">Submit</button>
            </p>
            <p>
                <button type="button" class="cancel">cancel</button>
            </p>
        </section>
        `
        projectSection.insertBefore(form,selectedProject)

        const projectList = Storage.getProjectList()
        const selectedProjectTitle = document.querySelector('.project.selected .project-title').textContent
        const project = projectList.find(project => project.title == selectedProjectTitle)

        const formTitle = document.querySelector('.nav form #title')
        formTitle.value = project.title

    }

    static removeAddProjectButton() {
        document.querySelector('.nav .add-project-button').style.display = 'none';
    }

    static clearProjectForm() {
        const form = document.querySelector('.nav form')
        form.remove();
    }

    static addProjectBtn() {
        document.querySelector('.nav .add-project-button').style.display = "block";
    }

    static displayProjectPopup() {
        const popup = document.createElement('div');
        popup.classList.add('popup')

        popup.innerHTML = `
            <div class="rename">Rename</div>
            <div class="delete">Delete</div>
        `
        const selectedProject = document.querySelector('.project.selected')
        selectedProject.appendChild(popup)

    }

    static removeProjectPopup() {
        document.querySelector('.popup').remove()
    }

    static deselectAll() {
        const nav = document.querySelector('.nav')
        const descendants = nav.querySelectorAll('*')

        descendants.forEach(element => element.classList.remove('selected'))
    }


}