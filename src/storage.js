export default class Storage {

    // static projectList = [''];

    static getProjectList() {
        return JSON.parse(localStorage.getItem('projectList'))
    }

    static saveProjectList(data) {
        localStorage.setItem('projectList', JSON.stringify(data))
    }

    static getTask(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    static addProject(project) {
        // this.projectList = this.getProjectList()
        // this.projectList.push(project);
        // this.saveProjectList()
        const projectList = Storage.getProjectList();
        projectList.push(project);
        Storage.saveProjectList(projectList);
    }

    static addTask(project, task) {
        // get projectList
        const projectList = Storage.getProjectList()
        // get project
        
        // add task to project
        const projectIndex = projectList.findIndex(item => item.title == project.title)
        projectList[projectIndex].tasks.push(task)
        console.log(projectList[projectIndex])
        // the code above has changed projectIndex itself so we can now save that as our new projectList
        // before I was just grabbing a reference
        Storage.saveProjectList(projectList);
        
    }
}