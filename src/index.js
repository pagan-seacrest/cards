import { root, loginOrCreate, account, config } from "./modules/config.js";
// import { wait } from "./modules/login.js";
import ElementHandler from "./modules/ElementHandler.js";
import VisitCardiologist from "./modules/VisitCardiologist.js";
import Client from "./modules/Client.js"
import login  from "./modules/login.js";


config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
const wait = new Promise((resolve) => {
    loginOrCreate.addEventListener("click", login);
})
wait.then(() => config.loginToggle(true))

const cardiologist = new VisitCardiologist({});