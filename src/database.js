function get (listname) {
    return JSON.parse(localStorage.getItem(listname)) || [];
}

function save (listname, listobject) {
    let tempList = JSON.parse(localStorage.getItem(listname)) || [];
    tempList.push(listobject);
    localStorage.setItem(listname, JSON.stringify(tempList));

    let lastId = parseInt(localStorage.getItem(`${listname}_lastId`)) || 0;
    localStorage.setItem(`${listname}_lastId`, lastId + 1);
}

function remove(listname) {
    localStorage.removeItem(listname);
    localStorage.removeItem(`${listname}_lastId`);
}

export default database = {
    get, save, remove
}