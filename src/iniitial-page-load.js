import UI from './UI'
import ProjectList from './project-list'
import Storage from './storage'
import Project from './project'

export default function loadPage() {
    // UI.renderTasks()
    if (localStorage.getItem('projectList') === null) {
        console.log('projectList is null')
        // Storage.projectList = []
        // Storage.saveProjectList()
        // Storage.saveProjectList([])
        // add default project
        
        const projectList = []
        console.log(projectList)
        projectList.push(new Project('default'))
        console.log(projectList)
        Storage.saveProjectList(projectList)
    }

    console.log(JSON.parse(localStorage.getItem('projectList')).length)
    if (JSON.parse(localStorage.getItem('projectList')).length == 0) {
        const projectList = []
        projectList.push(new Project('default'))
        console.log(projectList)
        Storage.saveProjectList(projectList)
    }
    UI.renderProjects()
    // set first Project to selected on loadup
    document.querySelector('.projects').firstElementChild.classList.add('selected')
    UI.renderTasks()
}