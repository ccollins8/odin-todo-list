export default class ProjectList {

    static getProject(projectName) {
        return Storage.getProjectList().find(project => project.title == title)
    }

}