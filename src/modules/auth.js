import Modal from "./modules/modal.js";

class Auth extends Modal {
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
        confirm.id = id;
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
            return form;
        } else {
            const form = this.form();
            form.append(this.email());
            form.append(this.password());
            form.append(this.confirm(id));
            return form;
        }
    }
}

export {Auth};