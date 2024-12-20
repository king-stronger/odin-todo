/**
 * todo.js
 * Provides functions to create todos
 * Depends on the database module
 */

import database from "./database";

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

    let edit = function(newData) {
        for(let key in newData){
            if(key !== "id" && key !== "projectId"){
                todo[key] = newData[key] ?? todo[key];
            }
        }
    }

    return {
        ...todo,
        edit
    }
}

export {
    createTodo
}