import database from './database';

function createProject(name, description){
    let projectId = database.lastId;

    let project = {
        projectId,
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