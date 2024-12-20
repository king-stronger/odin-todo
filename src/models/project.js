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

function edit(id, {name, description}){
    let project = database.find(id);

    project.name = name;
    project.description = description;

    database.edit('projects', id, project);
}

function get(id){
    return database.find('projects', id);
}

function destroy(id){
    database.remove('projects', id);
}

export {
    create, edit, get, destroy
}