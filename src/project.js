export default class Project {

    constructor(title) {
        this.title = title;
        this.tasks = []
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTask(taskTitle) {
        return this.tasks.find(task => task.title == taskTitle)
    }

    

}