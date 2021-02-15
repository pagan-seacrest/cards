import { root, loginOrCreate, account, config } from "./config.js";
import Auth from "./Auth.js";
import Client from "./Client.js";
import ElementHandler from "./ElementHandler.js"

function emptyCase() {
    const empty = new ElementHandler ([], {element: "p", id: "no-items", parentElement: root});
    empty.addElement()
    config.element("no-items").textContent = "Жодної картки візиту не було додано";
}

const auth = new Auth({position: root, formID: "auth"});
    const client = new Client();

export default async function login() {
    
    if (config.token() === null) {
        auth.login();

        const response = await fetch("https://ajax.test-danit.com/api/cards/login/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(account)
        });

        const token = await response.text();
        localStorage.setItem("token", token);
        // resolve()
    }
    
    loginOrCreate.removeEventListener("click", login);
    config.token() !== null ? config.loginToggle(true) : false;
    client.get().then(res => {
        res.length === 0 ? emptyCase() : false;
    });
            
}