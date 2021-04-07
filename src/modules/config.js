const root = document.getElementById("root");

const button = document.getElementById("button");

const data = {
    account: {
        "email": "velocity@fex.net",
        "password": "velocity"
    },
    url: "https://ajax.test-danit.com/api/v2/cards/",
}

function changeButtonsValue () {
  button.textContent = "Вхід" ? button.textContent = "Створити візит" : button.textContent = "Вхід";
}

const config = {
  buttonLogIn: {
    type: "submit",
    position: root,
    id: "auth-button-confirm",
    className: "send",
    value: "Вхід",
  },
  buttonCancel: {
    type: "button",
    position: root,
    id: "auth-button-cancel",
    className: "cancel",
    value: "Відмінити"
  },
  newVisitModal: {
    position: document.getElementById("root"),
    id: "visit-form",
    title: "Створення візиту",
  },
  submitVisit: {
    type: "submit",
    id: "submit-visit",
    value: "Створити візит"
  },
    visitCommonValues: {
        name: {
            // position: form,
            type: "text",
            placeHolder: "ПІБ",
            id: "visit-name",
            className: null,
            name: null
        },
        purpose: {
            // position: form,
            type: "text",
            placeHolder: "Мета вашого візиту",
            id: "visit-purpose",
            className: null,
            name: null
        },
        description: {
            // position: form,
            type: "text",
            placeHolder: "Короткий опис візиту",
            id: "visit-description",
            className: null,
            name: null
        },
        urgency: {
            // position: form,
            id: "visit-urgency"
        }
    },
    visitCardiologist: {
        presssure: {
            // position: form,
            type: "text",
            placeHolder: "Тиск зазвичай",
            id: "visit-pressure",
            className: null,
            name: null
        },
        bodyMassIndex: {
            // position: form,
            type: "number",
            placeHolder: "Індекс маси тіла",
            id: "visit-date",
            className: null,
            name: null
        },
        age: {
            // position: form,
            type: "number",
            placeHolder: "Вік",
            id: "visit-age",
            className: null,
            name: null
        }
    },
    visitDentist: {
        // position: form,
        type: "number",
        placeHolder: null,
        id: "visit-date",
        className: null
    },
    visitTherapist: {
        // position: form,
        type: "number",
        placeHolder: "Вік",
        id: "visit-age",
        className: null
    },
    buttonWrapper (position, className) {
        const div = document.createElement("div");
        div.className = `${className}`;
        position.append(div);

        return div;
    },
    token() { return localStorage.getItem("token") },

    element (id) {return document.getElementById(id); },
}

export {root, button, data, changeButtonsValue, config}
