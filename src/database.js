function get (listname) {
    return JSON.parse(localStorage.get(listname));
}

function save (listname, listobject) {
    localStorage.setItem(listname, JSON.stringify(listobject));
}

function remove(listname) {
    localStorage.removeItem(listname)
}