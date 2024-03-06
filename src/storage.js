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

    static getTask(project, taskTitle) {
        return project.tasks.find(task => task.title == taskTitle)
    }

    static addProject(project) {
        // this.projectList = this.getProjectList()
        // this.projectList.push(project);
        // this.saveProjectList()
        const projectList = Storage.getProjectList();
        projectList.push(project);
        Storage.saveProjectList(projectList);
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
        console.log(projectList[projectIndex])
        // the code above has changed projectIndex itself so we can now save that as our new projectList
        // before I was just grabbing a reference
        Storage.saveProjectList(projectList);
        
    }

    static deleteTask(projectTitle, taskTitle) {
        const projectList = Storage.getProjectList()
        const projectIndex = projectList.findIndex(item => item.title == projectTitle)
        const newProjectList = projectList[projectIndex].tasks.filter(item => item.title !== taskTitle)
        console.log(newProjectList)
        // Storage.saveProjectList(newProjectList)
    }
}