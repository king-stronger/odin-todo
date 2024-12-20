/**
 * database.js
 * Utility functions for interacting with the local storage
 * Provides methods to save, retrieve, delete lists as well as find and track unique ID
 */


/**
 * Retrieve a list from the local storage
 * @param {string} listname The key name of the list to retrieve
 * @returns {Array} The retrieved list or an empty array if the key does not exist 
 */
function all (listname) {
    return JSON.parse(localStorage.getItem(listname)) || [];
}

function find(listname, id){
    const list = JSON.parse(localStorage.getItem(listname));
    return list[id];
}

/**
 * Save an object in a list in the local storage
 * @param {string} listname The key name of the list to retrieve
 * @param {string} listobject The object to add to the list
 * @returns {void}
 */
function save (listname, listobject) {
    let tempList = JSON.parse(localStorage.getItem(listname)) || [];
    tempList.push(listobject);
    localStorage.setItem(listname, JSON.stringify(tempList));

    let lastId = parseInt(localStorage.getItem(`${listname}_lastId`)) || 0;
    localStorage.setItem(`${listname}_lastId`, lastId + 1);
}

/**
 * 
 * @param {string} listname the key of the list to edit
 * @param {int} id The id of the data to replace
 * @param {Object} data The data which will be replacing the old one 
 */
function edit(listname, id, data){
    let list = JSON.parse(localStorage.getItem(listname));
    list[id] = data;
    localStorage.setItem(listname, JSON.stringify(list));
}


/**
 * 
 * @param {string} listname The key name of the list to retrieve
 * @param {int} id the id of the item to remove
 */
function remove(listname, id){
    let list = JSON.parse(localStorage.getItem(listname));
    list.splice(id - 1, 1);
    localStorage.setItem(listname, JSON.stringify(list));
}


/**
 * Delete the list a list from the local storage
 * @param {string} listname The key name of the list to retrieve
 * @returns {void}
 */
function removeAll(listname) {
    localStorage.removeItem(listname);
    localStorage.removeItem(`${listname}_lastId`);
}


/**
 * Returns the last id generated of the list
 * @returns {number} The last id generated of a list
 */
function lastId(listname){
    return parseInt(localStorage.getItem(`${listname}_lastId`)) || 0;
}

export default database = {
    all, find, save, edit, remove, removeAll, lastId
}