/**
 * project.js 
 * Provides function to create and edit projects
 * Depends on the database module
 */

import database from '../database';

/**
 * 
 * @param {string} name The name of the project
 * @param {string} description The description of the project
 * @returns {Object} Returns a project with a function to edit itself
 */
function create(name, description){
    let id = database.lastId();

    let project = {
        id,
        name,
        description
    }

    database.save('projects', project);

    return {
        ...project,
        editProject
    };
}


export {
    create, edit
}