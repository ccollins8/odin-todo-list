import Project from './project'
import UI from './UI'
export default class Storage {

    // static projectList = [''];

    static getProjectList() {
        return JSON.parse(localStorage.getItem('projectList'))
    }

    static saveProjectList(data) {
        localStorage.setItem('projectList', JSON.stringify(data))
    }

    static getProject(projectTitle) {
        const projectList = this.getProjectList()
        return projectList.find(project => project.title == projectTitle)
    }

    // static getTask(project, taskTitle) {
    //     return project.tasks.find(task => task.title == taskTitle)
    // }

    static addProject(project) {
        // this.projectList = this.getProjectList()
        // this.projectList.push(project);
        // this.saveProjectList()
        const projectList = Storage.getProjectList();
        projectList.push(project);
        Storage.saveProjectList(projectList);
    }

    static editProject() {
        const projectList = Storage.getProjectList()
        const selectedProject = document.querySelector('.project.selected div').textContent
        const project = Object.assign(new Project(), projectList.find(project => project.title == selectedProject))
    }

    static deleteProject(project) {

    }

    static addTask(project, task) {
        // get projectList
        const projectList = Storage.getProjectList()
        // get project
        
        // add task to project
        const projectIndex = projectList.findIndex(item => item.title == project.title)
        projectList[projectIndex].tasks.push(task)
        // the code above has changed projectIndex itself so we can now save that as our new projectList
        // before I was just grabbing a reference
        Storage.saveProjectList(projectList);
        
    }

    static editTask() {
        // DO THIS PART NEXT
        const projectList = Storage.getProjectList()
        const selectedProject = document.querySelector('.project.selected div').textContent
        const project = Object.assign(new Project(), projectList.find(project => project.title == selectedProject))
        const selectedTaskTitle = document.querySelector('.selected .task-title').textContent
        console.log(project.getTask(selectedTaskTitle))
        const task = project.getTask(selectedTaskTitle);

        const title = document.querySelector('.list #title')
        const description = document.querySelector('.list #description')
        const priority = document.querySelector('.list #priority')
        const dueDate = document.querySelector('.list #date')

        task.title = title.value
        task.description = description.value
        task.priority = priority.value
        task.dueDate = dueDate.value
        Storage.saveProjectList(projectList)
    }

    static deleteTask(projectTitle, taskTitle) {
        const projectList = Storage.getProjectList()
        const projectIndex = projectList.findIndex(item => item.title == projectTitle)
        projectList[projectIndex].tasks = projectList[projectIndex].tasks.filter(item => item.title !== taskTitle)
        console.log(projectList)
        Storage.saveProjectList(projectList)
        
    }
}