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

}