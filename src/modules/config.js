const root = document.getElementById("root");
const loginOrCreate = document.getElementById("button");
const account = {"email": "velocity@fex.net", "password": "velocity"}

const config = {
    content (element, value) { element.textContent = value },
    remove (element) { element.remove() },
    token() { return localStorage.getItem("token") },
    loginToggle (value = undefined) {
        value === true ? this.content(loginOrCreate, "Створити візит") : this.content(loginOrCreate, "Вхід");
    },
    element (id) {return document.getElementById(id); },
}


export {root, loginOrCreate, account, config}