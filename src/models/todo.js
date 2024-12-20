/**
 * todo.js
 * Provides functions to create todos
 * Depends on the database module
 */

import database from "../database";

/**
 * 
 * @param {int} projectId to link the todo to his project
 * @param {string} title The title of the todo
 * @param {string} description the description of the todo
 * @param {Date} dueDate the due date of the todo
 * @param {int} priority The priority of the todo
 * @param {boolean} completed to see if the todo has been completed
 * @returns {Object} returns a todo object
 */
function createTodo(projectId, title, description, dueDate, priority, completed=false){
    let id = database.lastId('todo');

    let todo = {
        id, projectId, title, description, dueDate, priority, completed
    }

    database.save(todo);

    return {
        ...todo,
    }
}

function changeTitle(todo, newTitle) {
    todo.title = newTitle;
}

function changeDescription(todo, newDescription){
    todo.description = newDescription;
}

function changeDate(todo, newDate){
    todo.date = newDate || todo.date;
}

function changeCompleted(todo){
    todo.completed = !todo.completed;
}

function changePriority(todo, newPriority){
    todo.priority = newPriority;
}

function edit(id, newData){
    let todo = database.find(id);

    for (let key in newData){
        if(!['id', 'projectId'].includes(key) && Object.hasOwn(todo, key) && newData[key] !== null){
            todo[key] = newData[key];
        }
    }

    database.edit('todos', id, todo);
}

function get(id){
    return database.find('todos', id);
}

function destroy(id){
    database.remove('todos', id);
}

export default todo = {
    createTodo, changeDate, changeCompleted, changeDescription, changePriority, changeTitle, get, edit, destroy
}