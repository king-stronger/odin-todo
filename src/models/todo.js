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
function create(projectId, title, description, dueDate, priority, completed=false){
    let id = database.lastId('todo');

    let todo = {
        id, projectId, title, description, dueDate, priority, completed
    }

    database.save(todo);

    return {
        ...todo,
    }
}

function changeTitle(id, newTitle) {
    let todo = database.find(id);

    todo.title = newTitle;

    database.edit('todos', id, todo);
}

function changeDescription(id, newDescription){
    let todo = database.find(id);

    todo.description = newDescription;

    database.edit('todos', id, todo);
}

function changeDate(id, newDate){
    let todo = database.find(id);

    todo.date = newDate || todo.date;

    database.edit('todos', id, todo);
}

function changeCompleted(id){
    let todo = database.find(id);

    todo.completed = !todo.completed;

    database.edit('todos', id, todo);
}

function changePriority(id, newPriority){
    let todo = database.find(id);

    todo.priority = newPriority;

    database.edit('todos', id, todo);
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
    create, changeDate, changeCompleted, changeDescription, changePriority, changeTitle, get, edit, destroy
}