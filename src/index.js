import Modal from "./modules/modal.js";
// import {Auth} from "./modules/auth.js;";

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

const root = document.getElementById("root");

document.getElementById("button").addEventListener("click", enter);

const auth = new Auth({position: root, formID: "auth"});

function enter () {
const login = new Promise((resolve, reject) => {    
        if (document.getElementById("auth") === null) {
            localStorage.setItem("items", "empty");
            auth.login("sign-in");
            localStorage.setItem("token", "d161c7e0-0dc3-4624-9db0-9fb81b882316");
            return resolve();
        } else if (localStorage.getItem("token") === "d161c7e0-0dc3-4624-9db0-9fb81b882316") {
            return resolve();
        } else { return reject(); }
    });
    
login.then (() => {
    const token = localStorage.getItem("token");
    
    document.getElementById("sign-in").addEventListener("submit", (submit) => {
        submit.preventDefault();
        
        const requset = fetch("https://ajax.test-danit.com/api/cards/login", {
            method: "GET", headers: {
                Authorization : `Bearer ${token}`
            }
        });
        requset.then((res) => console.log(res));
        document.getElementById("auth").remove();
    })
});

}

// =============================================
// const token = localStorage.getItem("token");

const account = {"email": "velocity@fex.net", "password": "velocity"}

// fetch("https://ajax.test-danit.com/api/cards/", {
    // headers: { "Authorization": "Bearer 7b3ba7d7-4c45-4e6b-84d3-fef4f4fdc588" }
// }).then((res) => console.log(res));

// const ajax = fetch("https://ajax.test-danit.com/api/cards/login/",
// { method: "POST", headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(account)
// })
// ajax.then(res => console.log())

async function ajax() {
    const res = await fetch("https://ajax.test-danit.com/api/cards/login/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    })
    let token = await res.text();
    console.log(token);

}

ajax();