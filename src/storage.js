export default class Storage {
    static addTaskToStorage(task) {
        localStorage.setItem(task.title, JSON.stringify(task) )
    }

    static getTask(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}