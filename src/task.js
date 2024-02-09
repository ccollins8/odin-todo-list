export default class Task {
    constructor(title, description, dueDate, priorty) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorty = priorty;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    } 

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getPrioity() {
        return this.priorty;
    }

    setTitle(priorty) {
        this.priorty = priorty;
    }
}
