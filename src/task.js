export default class Task {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
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
        return this.priority;
    }

    setTitle(priority) {
        this.priority = priority;
    }
}
