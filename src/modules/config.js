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
    place: root,
    id: "auth-button-confirm",
    className: "send",
    value: "Вхід",
  },
  buttonCancel: {
    type: "button",
    place: root,
    id: "auth-button-cancel",
    className: "cancel",
    value: "Відмінити"
  },
  newVisitModal: {
    place: document.getElementById("root"),
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
            // place: form,
            type: "text",
            placeHolder: "ПІБ",
            id: "visit-name",
            className: null,
            name: null
        },
        purpose: {
            // place: form,
            type: "text",
            placeHolder: "Мета вашого візиту",
            id: "visit-purpose",
            className: null,
            name: null
        },
        description: {
            // place: form,
            type: "text",
            placeHolder: "Короткий опис візиту",
            id: "visit-description",
            className: null,
            name: null
        },
        urgency: {
            // place: form,
            id: "visit-urgency"
        }
    },
    visitCardiologist: {
        presssure: {
            // place: form,
            type: "text",
            placeHolder: "Тиск зазвичай",
            id: "visit-pressure",
            className: null,
            name: null
        },
        bodyMassIndex: {
            // place: form,
            type: "number",
            placeHolder: "Індекс маси тіла",
            id: "visit-date",
            className: null,
            name: null
        },
        age: {
            // place: form,
            type: "number",
            placeHolder: "Вік",
            id: "visit-age",
            className: null,
            name: null
        }
    },
    visitDentist: {
        // place: form,
        type: "number",
        placeHolder: null,
        id: "visit-date",
        className: null
    },
    visitTherapist: {
        // place: form,
        type: "number",
        placeHolder: "Вік",
        id: "visit-age",
        className: null
    },
    buttonWrapper (place, className) {
        const div = document.createElement("div");
        div.className = `${className}`;
        place.append(div);

        return div;
    },
    token() { return localStorage.getItem("token") },

    element (id) {return document.getElementById(id); },
}

export {root, button, data, changeButtonsValue, config}
