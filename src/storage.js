export default class Storage {
    static addTaskToStorage(task) {
        localStorage.setItem(task.title, JSON.stringify(task) )
    }
}