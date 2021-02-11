import { root, loginOrCreate, account, config } from "./modules/config.js";
// import { wait } from "./modules/login.js";
import login  from "./modules/login.js";


config.token() !== null ? config.content(loginOrCreate, "Створити візит") : false;
const wait = new Promise((resolve) => {
    loginOrCreate.addEventListener("click", login);
    // resolve();
})
wait.then(() => config.loginToggle(true))


class Client {
    constructor({}) {

    }
    async get () {
        const request = await fetch("https://ajax.test-danit.com/api/cards", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${config.token()}`
        }
    });

    return await request.json();
    }

    post () {
<<<<<<< HEAD
        
=======
        // fetch()
>>>>>>> 2824241... to old
    }
}

