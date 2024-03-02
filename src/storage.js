export default class Storage {

    static projectList = [''];

    static getProjectList() {
        return JSON.parse(localStorage.getItem('projectList'))
    }

    static saveProjectList() {
        localStorage.setItem('projectList', JSON.stringify(this.projectList))
    }

    static getTask(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    static addProject(project) {
        this.projectList = this.getProjectList()
        this.projectList.push(project);
        this.saveProjectList()
    }
}