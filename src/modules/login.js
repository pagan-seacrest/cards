import { root, loginOrCreate, account, config } from "./config.js";
import Auth from "./Auth.js";
import Client from "./Client.js";

const auth = new Auth({position: root, formID: "auth"});

export default async function login() {
    auth.login();

        const response = await fetch("https://ajax.test-danit.com/api/cards/login/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(account)
        });

        const token = await response.text();
        localStorage.setItem("token", token);
    
    loginOrCreate.removeEventListener("click", login);
    config.loginToggle(true);
}