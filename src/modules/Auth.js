import Modal from "./Modal.js";

import { root, loginOrCreate, account, config } from "./config.js";
import login  from "./login.js";
import Dashboard from "./Dashboard.js";
import Client from "./Client.js";


export default class Auth extends Modal {
    constructor ({position, type, formID, placeholder, required}) {
        super ({position: position, type: type, id: formID, placeHolder: placeholder, required: required});
        this.position = position;
        this.id = formID;
        this.required = true;
    }

    static form () {
        const form = super.input(); 
        form.id = this.id;
        this.position.append(form);
        return form;
    }

    email () {
        const login = super.input();
        login.type = "email";
        login.id = "login";
        login.placeholder = "Введіть вашу пошту";
        login.required = this.required;
        return login;
    }

    password () {
        const login = super.input();
        login.type = "password";
        login.id = "pass";
        login.placeholder = "Введіть ваш пароль";
        login.required = this.required;
        return login;
    }

    confirm (id) {
        const confirm = super.submit();
        confirm.textContent = "Вхід";
        confirm.id = "submit-login";
        return confirm;
    }

    login (id) {
            if (id === undefined) {
                const form = this.form();
                form.append(this.email());
                form.append(this.password());
                const confirm = this.confirm();
                confirm.removeAttribute("id");
                form.append(confirm);
            config.element("login").insertAdjacentHTML("beforebegin", `<header id="auth-title">Авторизація</header>`);
            return form;
            } else {
                const form = this.form();
                form.append(this.email());
                form.append(this.password());
                form.append(this.confirm(id));
                config.element("login").insertAdjacentHTML("beforebegin", `<header id="auth-title">Авторизація</header>`)
                return form;
            }
    }
}