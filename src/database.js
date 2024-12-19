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
function get (listname) {
    return JSON.parse(localStorage.getItem(listname)) || [];
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
 * Delete the list a list from the local storage
 * @param {string} listname The key name of the list to retrieve
 * @returns {void}
 */
function remove(listname) {
    localStorage.removeItem(listname);
    localStorage.removeItem(`${listname}_lastId`);
}

export default database = {
    get, save, remove
}