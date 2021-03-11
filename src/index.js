import { root, loginOrCreate, account, config } from "./modules/config.js";
import Client from "./modules/Client.js"
import login  from "./modules/login.js";
import Dashboard from "./modules/Dashboard.js";
import Auth from "./modules/Auth.js";

const dashboard = new Dashboard({});

config.token() ? config.content(loginOrCreate, "Створити візит") : false;
onchange = (config.token() !== null ? config.loginToggle(true): false);

onload = (config.token() !== null || config.element("button").textContent === "Створити візит" ?
() => {
    dashboard.update();
    dashboard.create();
    document.querySelector("#dashboard").insertAdjacentHTML("afterend", `<button id="reload-dashboard">Оновити</button>`);
    document.querySelector("#reload-dashboard").addEventListener("click", reload);
    function reload (event) {
        config.element("search").remove();
        config.element("dashboard").remove();
        dashboard.update();
    }
} : new Promise((next => {
        loginOrCreate.addEventListener("click", login);
        // next();
})).then(async () => {
    dashboard.update();
    dashboard.create();
}));