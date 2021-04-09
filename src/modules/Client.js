import {root, button, data, changeButtonsValue, config} from "./config.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import Modal from "./Modal.js";

export default class Client {
    constructor(body) {
      // config.token() ? button.textContent = "Створити візит" : button.addEventListener("click", this.auth);
      this.body = body;

    }

    setUp () {
      try {
        const thread = new Promise((resolve, reject) => {
          this.login().then(res => resolve(localStorage.setItem("token", res)));
          button.removeEventListener("click", this.auth);
          button.addEventListener("click", (ev) => {
            new VisitCardiologist({});
            new VisitDentist({});
            new VisitTherapist({});
          })
        });
        thread.then(() => changeButtonsValue());
        thread.catch(err => console.log(`${err} \n >>> Promise "thread" error: login failure `));
      } catch (err) {
        throw new Error(err);
      }
    }

    auth () {
      if (document.getElementById("auth-form") === null) {

      const auth = new Modal({place: root, id: "auth-form", title: "Авторизація"});
      const form = auth.add();
      auth.input({id: "auth-email", type: "text", placeholder: "Пошта"});
      auth.input({id: "auth-password", type: "password", placeholder: "Пароль"});
      const div = auth.wrap("button-wrapper");
      config.authorize.place = div;
      config.cancel.place = div;
      auth.button(config.authorize);
      auth.button(config.cancel);

      }
    }

    login () {
    return  fetch(`${data.url}login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data.account)
      }).then(res => res.text())
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

    async card (id) {
        const req = await fetch(`https://ajax.test-danit.com/api/cards/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            "Authorization": `Bearer ${config.token()}`
            }
        })
        const step =  await req.json();
        return step;
    }
/*
    async post () {
        const req = await fetch("https://ajax.test-danit.com/api/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
            body: JSON.stringify(this.body)
        });
        const res = await req.json();
        const reload = new Dashboard({});
        document.getElementById("search").remove();
        document.getElementById("dashboard").remove();
        reload.update();
        reload.create();
        return res;
    }

    async put (id) {
        const req = await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
            body: JSON.stringify(this.body)
        });
        const res = await req.json();
        const reload = new Dashboard({});
        document.getElementById("search").remove();
        document.getElementById("dashboard").remove();
        reload.update();
        reload.create();
        return res;
    }
*/
    async delete (id) {
        return await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.token()}`
            },
        });
    }
}
