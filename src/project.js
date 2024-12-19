/**
 * project.js to create and edit projects
 * Depends on the database module
 */

import database from './database';

/**
 * 
 * @param {string} name The name of the project
 * @param {string} description The description of the project
 * @returns {Object} Returns a project with a function to edit itself
 */
function createProject(name, description){
    let id = database.lastId();

    let project = {
        id,
        name,
        description
    }

    database.save('projects', project);

    let editProject = (newData) => {
        for (let key in newData){
            if(Object.hasOwn(project, key) && newData[key] !== null){
                project[key] = newData[key];
            }
        }
    }

    return {
        ...project,
        editProject
    };
}

export {
    createProject
}