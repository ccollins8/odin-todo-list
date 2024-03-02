import UI from './UI'
import Storage from './storage'

export default function loadPage() {
    // UI.renderTasks()
    if (localStorage.getItem('projectList') === null) {
        console.log('projectList is null')
        Storage.projectList = []
        Storage.saveProjectList()
    }
    UI.renderProjects()
}